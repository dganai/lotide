const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("should return ['world', 'lighthouse'] for ['hello']", () => {
    const results1 = without(["hello", "world", "lighthouse"], ["hello"]);
    assert.deepEqual(results1, ["world", "lighthouse"]);
  });
});








