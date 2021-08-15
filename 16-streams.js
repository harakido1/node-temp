const {createReadStream} = require('fs');

// const stream = createReadStream('./content/big.txt');
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8' });

// default buffer size - 64kb.
// last buffer - remainder.
// highWaterMark - buffer control size.
// const stream = createReadStream('./content/big.txt', { highWaterMark:90000 }).
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' }).

stream.on('data', (result) => {
  console.log(result);
})
stream.on('error', (err) => console.log(err));

// Reading Data in chunks: 65486 more bytes at a time.
// highWaterMark: 90000 Reading Data in chunks: 89950 more bytes at a time.
// encoding: 'utf8' ...hello world 9999