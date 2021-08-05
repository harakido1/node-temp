// Synchronous File System (FS) Module runs line by line one user at a time.
// Destructure the methods from fs Module.
// This is a Blocking Code File Structure.
const { readFileSync, writeFileSync } = require('fs');

// The readFileSync method requires two parameters: the path & encoding type.
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second); 
// This is the first text file. This is the second text file.

// The writeFileSync method will create a new file or overwrite an existing file.
// The writeFileSync requires the path with filename & optionally a value.
writeFileSync('./content/result-sync.txt', `Here is the result:\n${first} \n${second}`);

// To append an existing file use the flag: { flag: 'a' }.
writeFileSync('./content/result-sync.txt', '\nHello world!', { flag: 'a' });