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

  res.status(200).json({ images });
}
