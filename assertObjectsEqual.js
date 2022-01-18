const eqObjects = require("./eqObjects");
// assertObjectsEqual needs to take in two objects and console.log appropriate msg

const assertObjectsEqual = (actual, expected) => {
  // use util library inspect function to show moer detailed object output
  const inspect = require('util').inspect;
  let finalResult = eqObjects(actual, expected);
  if (finalResult) {
    actual === expected ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;