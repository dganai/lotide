// implement without function
// without needs to return a subset of a given array and removing unwanted elements
// take in a source array:
// also need a itemsToRemove array
// return only elements from source array that are not present in itemsToRemove array
// without function must return new array and not modify original array
// use test case provided



const without = function(source, itemsToRemove) {
  let newArray = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;

};

module.exports = without;