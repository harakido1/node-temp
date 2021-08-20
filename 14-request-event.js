/*
Basic Server:
This was the server with callback functions.
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Welcome')
})
*/

// The serve emits the request event,
// then the Event Emitter listens for the request,
// so the logic can respond to the request.

// emits request event / subscribe to it / listen for it / respond to it

// Server Using Event Emitter API:
const http = require('http');

const server = http.createServer()

server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)