// Javascript is Synchronous and single threaded - runs line-by-line.
// Event Loop registers the callback for task execution for offloading.
const { readFile } = require('fs');

console.log('Started the first task.');
// Event Loop offloads to the readFile system.
readFile('./content/first.txt', 'utf8', (err, result) => {
   if(err) {
      console.log(err);
      return
   } else {
      // This is the callback.
      console.log(result);
      console.log('Completed the first task.');
   };
});
console.log('Starting the next task.');

// SOLUTION:
// Started the first task.
// Starting the next task.
// This is the first text file.
// Completed the first task.