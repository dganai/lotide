// implementing assertArraysEqual and eqArrays

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

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(true) : console.log(false);
};


// implement without function
// without needs to return a subset of a given array and removing unwanted elements
// take in a source array:
// also need a itemsToRemove array
// return only elements from source array that are not present in itemsToRemove array
// without function must return new array and not modify original array
// use test case provided



const without = function(source, itemsToRemove) {
  let newArray = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  }
  console.log(newArray);

};

// test cases below
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);