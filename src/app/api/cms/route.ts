/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Helper to read data
function readData() {
  try {
    const DATA_DIR = process.env.DATA_DIR || process.cwd();
    const dataFilePath = path.join(DATA_DIR, 'parsed_posts.json');
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading data:', error);
    return {
      blogs: [],
      news: [],
      events: [],
      webinars: [],
      caseStudies: []
    };
  }
}

// Helper to write data
function writeData(data: any) {
  try {
    const DATA_DIR = process.env.DATA_DIR || process.cwd();
    const dataFilePath = path.join(DATA_DIR, 'parsed_posts.json');
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
}

// Mapping from URL 'type' param to JSON key
const typeMap: Record<string, string> = {
  blog: 'blogs',
  news: 'news',
  event: 'events',
  webinar: 'webinars',
  caseStudy: 'caseStudies'
};

// Each content type is uniquely identified by a different field.
// Case studies route by `slug` (e.g. /case-studies/[slug]) and have no `href`
// field at all, so matching them by `href` (as this route used to) would
// silently hit whichever item's `href` is undefined - i.e. the wrong record.
const identityField: Record<string, 'href' | 'slug'> = {
  blog: 'href',
  news: 'href',
  event: 'href',
  webinar: 'href',
  caseStudy: 'slug'
};

// URL path prefix used when auto-generating a `href` for a new item.
// Must match each type's actual route so links/detail-page lookups work.
const hrefPrefix: Record<string, string> = {
  blog: '/post',
  news: '/news',
  event: '/events',
  webinar: '/webinars'
};

function slugify(title: string) {
  return title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function GET() {
  const data = readData();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, data: postData } = body;

    const jsonKey = typeMap[type];
    if (!jsonKey) {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 400 });
    }

    const allData = readData();

    // Ensure array exists
    if (!Array.isArray(allData[jsonKey])) {
      allData[jsonKey] = [];
    }
    const list = allData[jsonKey];

    const newPost = { ...postData };
    delete newPost.isNew;

    const idFieldName = identityField[type];
    if (!newPost[idFieldName] && newPost.title) {
      const slug = slugify(newPost.title);
      newPost[idFieldName] = idFieldName === 'slug' ? slug : `${hrefPrefix[type]}/${slug}`;
    }

    // Auto-assign a numeric id for types that key React lists / lookups on it
    if (newPost.id === undefined) {
      const existingIds = list.map((p: any) => (typeof p.id === 'number' ? p.id : 0));
      newPost.id = existingIds.length ? Math.max(...existingIds) + 1 : 1;
    }

    list.unshift(newPost); // Add to beginning

    const success = writeData(allData);

    if (success) {
      return NextResponse.json({ message: 'Success', post: newPost }, { status: 201 });
    } else {
      return NextResponse.json({ error: 'Failed to write data' }, { status: 500 });
    }

  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { type, id, data: postData } = body;

    const jsonKey = typeMap[type];
    if (!jsonKey) {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 400 });
    }

    const idFieldName = identityField[type];
    const allData = readData();
    const list = allData[jsonKey] || [];
    const index = list.findIndex((p: any) => p[idFieldName] === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const updated = { ...list[index], ...postData };
    delete updated.isNew;
    list[index] = updated;
    allData[jsonKey] = list;

    const success = writeData(allData);

    if (success) {
      return NextResponse.json({ message: 'Success', post: list[index] }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to write data' }, { status: 500 });
    }

  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');

    if (!type || !id) {
      return NextResponse.json({ error: 'Invalid request parameters' }, { status: 400 });
    }

    const jsonKey = typeMap[type];
    if (!jsonKey) {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 400 });
    }

    const idFieldName = identityField[type];
    const allData = readData();
    const list = allData[jsonKey] || [];
    const filteredList = list.filter((p: any) => p[idFieldName] !== id);

    if (list.length === filteredList.length) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    allData[jsonKey] = filteredList;
    const success = writeData(allData);

    if (success) {
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to write data' }, { status: 500 });
    }

  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
