// implement eqObjects
const eqObjects = (object1, object2) => {
  let keyA = Object.keys(object1);
  let keyB = Object.keys(object2);

  if (keyA.length === keyB.length) {
    for (let key of keyA) {
      if (Array.isArray(object1[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } return false;
};
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
// assertObjectsEqual needs to take in two objects and console.log appropriate msg

const assertObjectsEqual = (actual, expected) => {
  // use util library inspect function to show moer detailed object output
  const inspect = require('util').inspect;
  let finalResult = eqObjects(actual, expected);
  if (finalResult) {
    actual === expected ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// test below

const test1 = {
  name: "Dina",
  age: 26,
  hairColor: "Brown"
};

const test2 = {
  name: "Dina",
  age: 26,
  hairColor: "Brown"
};

const test3 = {
  name: "Preet",
  age: 22,
  hairColor: "Pink"
};

assertObjectsEqual(eqObjects(test1, test2), true); // pass
assertObjectsEqual(eqObjects(test1, test3), true); // fail

