// execute the first js file using node 
// on terminal 
// >node .file_name.js

console.log("Hello world from node");

// global object 
console.log(global);

// inside node, there is a common core module called: commonJS module

const os = require('os');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// call a base function dirname
console.log(__dirname);

console.log(__filename);