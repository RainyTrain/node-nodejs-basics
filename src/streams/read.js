import path from 'path';
import fs from 'fs';

const filePath = path.resolve('src', 'streams', 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const readable = fs.createReadStream(filePath);
    readable.pipe(process.stdout);
  } catch (error) {
    console.log(error);
  }
};

await read();
