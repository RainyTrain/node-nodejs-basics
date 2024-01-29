import path from 'path';
import fs from 'fs';

const filePath = path.resolve('src', 'streams', 'files', 'fileToWrite.txt');

const write = async () => {
  try {
    const writable = fs.createWriteStream(filePath);
    process.stdin.pipe(writable);
  } catch (error) {
    console.log(error);
  }
};

await write();
