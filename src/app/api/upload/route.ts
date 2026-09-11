import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import fs from 'fs';

export const dynamic = 'force-dynamic';

// Triggering a new deployment to ensure the persistent volume changes are live.

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file received.' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
    const savedFilename = `${uniqueSuffix}-${filename}`;
    
    // Define data directory and save to uploads folder inside it
    const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'public');
    const uploadDir = path.join(DATA_DIR, 'uploads');
    
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    const filePath = path.join(uploadDir, savedFilename);
    await writeFile(filePath, buffer);
    
    // Return the dynamic API URL instead of static public URL
    const fileUrl = `/api/images/${savedFilename}`;
    
    return NextResponse.json({ url: fileUrl }, { status: 201 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload file.' }, { status: 500 });
  }
}
