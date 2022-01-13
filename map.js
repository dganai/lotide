// map function will take in two arguments:
// 1. an array to map
// 2. callback function
// function should return new array based on results of callback function

const words = ["gym", "weights", "workout", "sprints", "sets"];
const food = ['sushi', 'burgers', 'noodles', 'pizza'];
const colors = ['blue', 'red', 'pink', 'black', 'white'];


const map = (array, callback) => {
  // console.log("array", array);
  // console.log("callback", callback);

  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

// implement assertArraysEqual+eqArrays function to test map function

const eqArrays = (array1, array2) => {
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

const assertArraysEqual = (array1, array2) => {
  eqArrays(array1, array2) ? console.log(true) : console.log(false);
};

// test below
const test1 = map(words, (word) => word);
console.log(test1);
const test2 = map(food, (word) => word);
console.log(test2);
const test3 = map(colors, (word) => word);
console.log(test3);

assertArraysEqual(test1, words);
assertArraysEqual(test2, food);
assertArraysEqual(test3, colors);