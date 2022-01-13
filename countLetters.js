// implement assertEqual function
const assertEqual = function(actual, expected) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
// new function countLetters should take in a sentence as a string and return count of each of the letters in that sentence
// use for..of loop with strings

const countLetters = function(string) {
  const result = {};
  let newString = string.split(" ").join("");
  for (let letter of newString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  console.log(result);
  return result;
};

// test below

assertEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});