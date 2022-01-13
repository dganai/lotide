// implenting eqArrays function

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
  

// assertArraysEqual will also take in two arrays
// console.log true or false message to console
// implement eqArrays function with ternary operator -> condition ? message if true : message if false

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(true) : console.log(false);
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));