const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it("returns true when comparing two identical arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false when comparing [1, 2, 3] to an empty array []", () => {
    assert.strictEqual(eqArrays([1, 2, 3], []), false);
  });
  it("returns false when comparing two different arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3,], [1, 2, '3']), false);
  });
 
});

