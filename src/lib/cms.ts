import fs from 'fs';
import path from 'path';

// Note: In Next.js App Router Server Components, it is safe to read the file system directly.
// This avoids issues with absolute URLs during build time fetch calls.

const dataFilePath = path.join(process.cwd(), 'parsed_posts.json');

export function getCMSData() {
  try {
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading CMS data:', error);
    return {
      blogs: [],
      news: [],
      events: [],
      webinars: [],
      caseStudies: []
    };
  }
}

export function getBlogs() {
  const data = getCMSData();
  return data.blogs || [];
}

export function getNews() {
  const data = getCMSData();
  return data.news || [];
}

export function getEvents() {
  const data = getCMSData();
  return data.events || [];
}

export function getWebinars() {
  const data = getCMSData();
  return data.webinars || [];
}

export function getCaseStudies() {
  const data = getCMSData();
  return data.caseStudies || [];
}
