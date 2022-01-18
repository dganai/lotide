// map function will take in two arguments:
// 1. an array to map
// 2. callback function
// function should return new array based on results of callback function




const map = (array, callback) => {
  // console.log("array", array);
  // console.log("callback", callback);

  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};



module.exports = map;
