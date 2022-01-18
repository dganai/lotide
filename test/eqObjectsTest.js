const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe('#eqObjects', () => {
  it("returns a boolean when comparing 2 objects", () => {
    const ab = {a: '1', b: '2'};
    const ba = {b: '2', a: '1'};
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("returns a boolean when comparing 2 objects", () => {
    const ab = { c: '1', d: ['2', 3] };
    const ba = { d: ['2', 3], c: '1' };
    assert.deepEqual(eqObjects(ab, ba), true);

  });
  it("returns a boolean when comparing 2 objects", () => {
    const ab = { c: '1', d: ['2', 3] };
    const ba = { c: '1', d: ['2', 3, 4] };
    assert.deepEqual(eqObjects(ab, ba), false);

  });
});











