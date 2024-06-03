// pages/api/list-images.ts
import fs from 'fs';
import path from 'path';

export default function handler(req: any, res: any) {
  const imagesDir = path.join(process.cwd(), 'public/templates/peace');
  const imageFiles = fs.readdirSync(imagesDir).filter(file => file.endsWith('.jpg'));

  const images = imageFiles.map(file => ({
    filename: file,
    url: `/templates/peace/${file}`
  }));

  console.log("peace images", images); // This will log to the server console, not the browser console

  res.status(200).json({ images });
}
