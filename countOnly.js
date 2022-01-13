/// implent assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  const output = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (output[item]) {
        output[item] += 1;
      } else {
        output[item] = 1;
      }
    }
  }
  console.log(output);
  return output;
};

// test code below

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);