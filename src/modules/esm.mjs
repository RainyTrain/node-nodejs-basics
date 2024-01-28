// const path = require('path');
import path from 'path';

// const { release, version } = require('os');
import { release, type, version } from 'os';

// const { createServer: createServerHttp } = require('http');
import { createServer as createServerHttp } from 'http';

// require('./files/c');
import './files/c.js';

const random = Math.random();

// let unknownObject;

// if (random > 0.5) {
//     unknownObject = require('./files/a.json');
// } else {
//     unknownObject = require('./files/b.json');
// }

export let unknownObject =
  random > 0.5
    ? import('./files/a.json', { assert: { type: 'json' } })
    : import('./files/b.json', { assert: { type: 'json' } });

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${path.__filename}`);
console.log(`Path to current directory is ${path.__dirname}`);

export const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

unknownObject
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});
