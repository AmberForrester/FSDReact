const add = (x,y) => x+y;
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;

const cube = (x) => x*x*x;
const square = (x) => x*x;

// make them available to use everywhere

module.exports = {add, subtract, multiply, divide, cube, square}; 