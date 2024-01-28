import fs from 'fs/promises';
import path from 'path';

const currentPath = path.resolve('src', 'fs', 'files');

const rename = async () => {
  try {
    await fs.rename(
      path.join(currentPath, 'wrongFilename.txt'),
      path.join(currentPath, 'properFilename.md'),
    );
  } catch {
    console.log('FS operation failed');
  }
};

await rename();
