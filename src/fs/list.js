import fs from 'fs/promises';
import path from 'path';

const currentPath = path.resolve('src', 'fs', 'files');

const list = async () => {
  try {
    const data = await fs.readdir(currentPath, { recursive: true });
    console.log(data);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
