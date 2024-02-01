import { fileURLToPath } from 'url';
import worker from 'worker_threads';
import path from 'path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.resolve(__dirname, 'worker.js');

const numberOfCpuCores = os.cpus().length;

const performCalculations = async () => {
  const promises = [];

  for (let index = 0; index < numberOfCpuCores; index++) {
    const promise = new Promise((resolve, reject) => {
      const work = new worker.Worker(workerPath);

      work.postMessage(10 + index);

      work.on('message', (res) => {
        resolve(res);
      });
    });

    promises.push(promise);
  }

  await Promise.allSettled(promises).then((res) => {
    console.log(res);
  });
};

await performCalculations();
