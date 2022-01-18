const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("returns 'noma' for callback function", () => {
    const results1 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2);
    assert.equal(results1, 'noma');
  });
});







