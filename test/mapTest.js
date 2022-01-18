const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  const words = ["gym", "weights", "workout", "sprints", "sets"];
  const food = ['sushi', 'burgers', 'noodles', 'pizza'];
  const colors = ['blue', 'red', 'pink', 'black', 'white'];

  const results1 = map(words, word => word[0]);
  it("returns ['g', 'w', 'w', 's', 's'] as the first letter of every word in the array", () => {
    assert.deepEqual(results1, ['g', 'w', 'w', 's', 's']);
  });
  const results2 = map(food, (word) => word[0]);
  it("returns ['s', 'b', 'n', 'p'] as the first letter of every word in the array", () => {
    assert.deepEqual(results2, ['s', 'b', 'n', 'p']);
  });
  const results3 = map(colors, (word) => word[0]);
  it("returns ['b', 'r', 'p', 'b', 'w'] as the first letter of every word in the array", () => {
    assert.deepEqual(results3, ['b', 'r', 'p', 'b', 'w']);
  });
});










// test below
//const test1 = map(words, (word) => word);
//console.log(test1);
//const test2 = map(food, (word) => word);
//console.log(test2);
//const test3 = map(colors, (word) => word);
//console.log(test3);

