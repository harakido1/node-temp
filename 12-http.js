// HTTP Module Intro - setting up a webserver.
const http=require('http');

const server = http.createServer((req, res) => {
   if(req.url === '/') {
      res.end('Welcome to our home page.');
   } else if(req.url === '/about') {
      res.end('Here is our short history.');
   } else {
      res.end(`<h1>Oops!</h1>
         <p>Can't find that page...</p>
         <a href="/">back home</a>
      `);
   };
});

server.listen(5000);
console.log('Server listening on port 5000.')