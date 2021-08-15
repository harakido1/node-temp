// Started operating system process.
console.log('first');
setTimeout(() => {
   console.log('second');
}, 0);
console.log('third');
// Completed and exited operation system process.

// SOLUTION:
// first
// third
// second