const {createReadStream} = require('fs');

// Reading data in chunks of 64K bites:
"https://nodejs.org/docs/latest-v15.x/api/stream.html#stream_class_stream_readable"
 // const stream = createReadStream('./content/big.txt');// <Buffer 6f 20 ... 65486 more bytes>

 // Change the size of the buffer by highWaterMark:
//  const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8' });

// default buffer size - 64kb.
// last buffer - remainder.
// highWaterMark - buffer control size.
// const stream = createReadStream('./content/big.txt', { highWaterMark:90000 }).
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' }).
// path, highWaterMark, encoding

stream.on('data', (result) => {
  console.log(result);
})
stream.on('error', (err) => console.log(err));

// Reading Data in chunks: 65486 more bytes at a time.
// highWaterMark: 90000 Reading Data in chunks: 89950 more bytes at a time.
// encoding: 'utf8' ...Hello world! 9999