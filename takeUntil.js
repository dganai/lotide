// takeUntil will take two parameters, 1. array to work with, 2. the callback
// function will return a slice of the array with elements from begininning
// should keep going back until truthy value returned

const takeUntil = (array, callback) => {
  const results = [];

  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;