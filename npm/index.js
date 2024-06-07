console.log("hello World from nodemon");

console.log("welcome to CBC");

const {format} = require('date-fns')

// creating a format for what I want my output to be
// check the documentation for the available formats for the correct outputs 
 
console.log(format(new Date(), 'dd-MM-yy \t HH:mm:ss'));