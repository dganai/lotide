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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // for in loop
  let string = sentence;
  for (let index in string) {
    let letter = string[index];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(+index);
      } else {
        results[letter] = [+index];
      }
    }
  }
  console.log(results);

  return results;
};


// test below

letterPositions("lighthouse in the house");



letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").o, [3]);
assertArraysEqual(letterPositions("hello").h, [0]);