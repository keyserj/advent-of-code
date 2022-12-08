import fs from 'fs';
import path from 'path';

export const loadInput = (fileName: string) => {
  const filePath = path.join(".", fileName)
  const data = fs.readFileSync(filePath, 'utf8');

  return data;
}
