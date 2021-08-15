// 8/5/2021
// NPM Commands:

// npm - global command comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// npx allows running of packages outside the computer environment

// package.json - node_module manifest file (stores important info about project/package)
// Three ways to create the manifest file:
// 1) manual approach (create package.json in the root, create properties etc)
// 2) npm init (step by step, press enter to skip)
// 3) npm init -y (everything default and can update later)

// example using lodash flatten deep method:
const _ = require('lodash');

const items = [1, [2, [3, [4, ]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

// $ node app.js
// [ 1, 2, 3, 4 ]

// Github.com
// Create repository: harakido1/node-temp
// Create a .gitignore file to be ignored by the Git source control.
// ./.gitignore      /node_modules     and save.

// git init
// git add .
// git commit -m "first commit"
// Form Git: …or push an existing repository from the command line
// git remote add origin https://github.com/harakido1/node-temp.git
// git branch -M master
// git push -u origin master

// When cloning a repository run: 'npm install' to install package dependencies

// npm i nodemon -D    Not to be used in production.
// ./package.json     "start": "node app.js",     "dev": "nodemon app.js"
// $ npm run dev
console.log('Hello world!');

// ^c stops nodemon
// nuclear uninstall:
// Delete node_modules
// Delete package-lock.json
// $ npm install

// Global install:
// $ npm install -g nodemon
// $ nodemon app.js

// npx package runner
// npm 5.2 or greater run packages with installing them.


// 8/7/2021





