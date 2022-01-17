// assertArraysEqual will also take in two arrays
// console.log true or false message to console
// implement eqArrays function with ternary operator -> condition ? message if true : message if false
const eqArrays = require('./eqArrays');
const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(true) : console.log(false);
};



module.exports = assertArraysEqual;