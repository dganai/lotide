// implement assertEqual and eqArrays
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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
  

// eqObjects must take in two objects and return true or false

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

// test below



const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = { a: "1", b: "2" };

// use assertEqual to show result

assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(ab, ba), true);

