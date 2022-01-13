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