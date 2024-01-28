import fs from 'fs/promises';
import path from 'path';

const currentPath = path.resolve('src', 'fs', 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const data = await fs.readFile(currentPath, { flag: 'r', encoding: 'utf-8' });
    console.log(data);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
