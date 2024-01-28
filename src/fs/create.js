import fs from 'fs/promises';
import path from 'path';

const file = path.join(path.resolve('src', 'fs', 'files', 'file.txt'));

const create = async () => {
  try {
    fs.writeFile(file, 'I am fresh and young', { flag: 'wx' });
  } catch (error) {
    console.log(error);
  }
};

await create();
