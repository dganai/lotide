/// implent assertEqual function


// create countOnly function
// takes in collection of items and returns counts for subset of those items
// decide what to count, which items(strings) needed vs ignoring others
//countOnly - > array + object = return object counts of everything that the input object listed
// only truthy values should be counted, everything else ignored

//declare function
//allItems: an array of stringd that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  // how many times were that string in allItems array
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;
};



module.exports = countOnly;