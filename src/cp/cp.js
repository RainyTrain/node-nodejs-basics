import child_process from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.resolve(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = child_process.spawn('node', [workerPath, args]);

  process.stdin.pipe(child.stdin);

  child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
  });

  child.stdout.on('error', (err) => {
    console.log(`oops, error occured: ${err}`);
  });

  child.stdout.on('end', () => {
    console.log(`end!`);
  });
};

spawnChildProcess([1, 2, 3, 4, 5]);
