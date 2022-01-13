//implement assertEqual
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// findKey function will search for a key on an object where its value matches a given value
// takes in object and value
// scan object, return first key which contains given value
// - if no key, return undefined

const findKeyByValue = (object, value) => {
  let keyArr = Object.keys(object);
  for (let key of keyArr) {
    if (object[key] === value) {
      return key;
    }
  }
};

// test below
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
