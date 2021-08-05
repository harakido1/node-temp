// Asynchronous, Non-Blocking File System allows for multiple users.
// Destructuring async method from File System(fs) module.
const { readFile, writeFile } = require('fs');

// The readFile method requires three parameters: file path, encoding type, and callback.
readFile('./content/first.txt', 'utf8', (err, result) => {
   if(err) {
      console.log(err);
      return;
   } else {
      const first = result;
      readFile('./content/second.txt', 'utf8', (err, result) => {
         if(err) {
            console.log(err);
            return;
         } else {
            const second = result;
            // Write to a new file or overwrite an existing file.
            writeFile(
               './content/result-async.txt', 
               `Here is the result: \n${first} \n${second}`,
               (err, result) => {
                  if(err) {
                     console.log(err);
                     return;
                  } else {
                     console.log('Logging: Done with this task to prevent "undefined".');
                  }
               }
            )
         };
      })
   };
});