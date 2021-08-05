const path = require('path');
console.log(`The folders on this computer are separated by "${path.sep}".`);
// The folders on this computer are separated by "\".

// NET's URI uses forward slashes is because it's formatting for use in a webbrowser. The server will do all the necessary work to link web resources to files on a hard drive. Windows uses the backslash ( \ ) for the file system delimiter. Both will work.

// Normalize a file path
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath); // \content\subfolder\test.txt

// Display the base name
const base = path.basename(filePath);
console.log(base); // test.txt

// Display the absolute path
const absolute = path.resolve(__dirname,'test.txt');
console.log(absolute);
// C:\Users\harak\OneDrive\Documents\ProgWorkshop\node-smilga-tutorial\test.txt