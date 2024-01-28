import fs from 'fs/promises';
import path from 'path';

const currentPath = path.resolve('src', 'fs');

const create = async () => {
  try {
    await fs.cp(path.join(currentPath, 'files'), path.join(currentPath, 'files_copy'), {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (error) {
    console.log(error);
  }
};

await create();
