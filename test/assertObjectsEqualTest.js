const assert = require('chai').assert;
const assertObjectsEqual = require('../assertArraysEqual');
const eqObjects = require('../eqObjects');




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

