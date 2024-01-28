import fs from 'fs/promises';
import path from 'path';

const currentPath = path.resolve('src', 'fs', 'files');

const remove = async () => {
  try {
    await fs.unlink(path.join(currentPath, 'fileToRemove.txt'));
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
