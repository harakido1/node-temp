// NodeJS is an event-driven non-blocking runtime environment for JavaScript that has become very popular on the server-side. This is because Nodejs has an event-driven architecture capable of asynchronous I/O. Event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or message passing from other programs or threads. Node. js is a proper multi-threaded language just like Java. There are two threads in Node. js, one thread is dedicatedly responsible for the event loop and the other is for the execution of your program.

// on - listen for an event.
// emit - emit an event.
// Additional Information:
const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
   console.log(`data received user ${name} with id ${id}`);
});
customEmitter.on('response', () => {
   console.log('Some other logic here.');
});
customEmitter.emit('response', 'John', 67); 

//OUTPUT:
// data received user John with id 67
// Some other logic here.