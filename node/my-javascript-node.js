// execute the first js file using node 
// on terminal 
// >node .file_name.js

console.log("Hello world from node");

// global object 
console.log(global);

// inside node, there is a common core module called: commonJS module

const os = require('os');
const path = require('path');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// call a base function dirname
console.log(__dirname);

console.log(__filename);

// directly call the path
console.log(path.dirname(__filename))

console.log(path.extname(__filename))

// no API calls in node
console.log(path.parse(__filename))

