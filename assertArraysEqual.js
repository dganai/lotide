// implenting eqArrays function

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      } else {
        return   false;
      }
    }
  }
};

// assertArraysEqual will also take in two arrays
// console.log true or false message to console
// implement eqArrays function with ternary operator -> condition ? message if true : message if false

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(true) : console.log(false);
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));