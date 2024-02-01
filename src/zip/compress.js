import path from 'path';
import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { unlink } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = path.resolve(__dirname, 'files');

const zip = zlib.createGzip();
const read = fs.createReadStream(path.join(pathToFile, 'fileToCompress.txt'));
const write = fs.createWriteStream(path.join(pathToFile, 'archive.gz'));

const compress = async () => {
  await pipeline(read, zip, write)
    .then(async () => {
      await unlink(path.join(pathToFile, 'fileToCompress.txt'));
    })
    .catch((error) => {
      console.log(error);
    });
};

await compress();
