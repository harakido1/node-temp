var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // Instead of using the next two lines use fs.createReadStream().
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res) // pushes the read chunks to write chunks. Console Header - Response: chunked
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)