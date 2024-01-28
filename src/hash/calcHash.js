import path from 'path';
import crypto from 'crypto';
import { createReadStream } from 'fs';
import { stdout } from 'process';

const filePath = path.resolve('src', 'hash', 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = crypto.createHash('sha256');
  const reader = createReadStream(filePath);
  reader.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
    