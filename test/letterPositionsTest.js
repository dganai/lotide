const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  const results1 = letterPositions("lighthouse in the house");
  const results2 = results1["l"];
  it("returns [0] for 'l' in 'lighthouse in the house'", () => {
    assert.deepEqual(results2, [0]);
  });
  const results3 = results1["i"];
  it("returns [1, 11] for 'i' in 'lighthouse in the house'", () => {
    assert.deepEqual(results3, [1, 11]);
  });

});

