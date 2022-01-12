const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// implement function eqArrays which takes two arrays and returns true or false, based on perfect match
// use assertEqual to write test cases for various scenarios

// need two arrays
let array1 = [];
let array2 = [];

let eqArrays = function(array1, array2) {
 for (let i = 0; i < array1.length; i++) {
   if(array1[i] !== array2[i]) {
     return false;
   }
 }
 return true;

}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);