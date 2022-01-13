// takeUntil will take two parameters, 1. array to work with, 2. the callback
// function will return a slice of the array with elements from begininning
// should keep going back until truthy value returned

const takeUntil = (array, callback) => {
  const results = [];

  for (let i = 0; callback(array[i]) === false; i++) {
    if (i > array.length) {
      break;
    } else {
      results.push(array[i]);
    }

  }
  return results;
};

// test below

const data1 = [1, 2, 3, 4, 5, -7];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"
];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);



// implement assertArraysEqual and eqArrays

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

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(true) : console.log(false);
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));