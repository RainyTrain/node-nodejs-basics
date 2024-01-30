import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = new Transform({
  transform(chunk, _, callback) {
    const reversed = String(chunk).split('').reverse().join('');
    callback(null, reversed);
  },
});
//v1
const transform1 = async () => {
  const stdin = process.stdin;
  const stdout = process.stdout;

  stdin.pipe(transform).pipe(stdout);
};

//v2
const transform2 = async () => {
  await pipeline(process.stdin, transform, process.stdout);
};

await transform1();
