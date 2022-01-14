const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//test code

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);