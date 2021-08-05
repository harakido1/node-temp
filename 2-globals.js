// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// Hello world! repeats every second
console.log(__dirname)
setInterval(( ) => {
  console.log('Hello world!')
}, 1000)
