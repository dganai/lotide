const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("returns [1, 2, 3, 4, 5] for [1, 2, 3, 4, 5, -7]", () => {
    const data1 = [1, 2, 3, 4, 5, -7];
    const results1 = takeUntil(data1, (x) => x < 0);
    assert.deepEqual(results1, [1, 2, 3, 4, 5,]);
  });
  it("returns array slice", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ",");
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
});












