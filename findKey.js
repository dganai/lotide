const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// findKey takes in an object and callback
// scan object and return first key for callback returns truthy, no key = return undefined

const findKey = (object, callback) => {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }

};

// test  below

assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)), "noma"); // pass


