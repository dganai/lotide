const assert = require('chai').assert;
const countOnly = require('../countOnly');


// test code below


describe("#countOnly", () => {
 

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

  it('returns 1 for result1["Jason"]', () => {
    assert.equal(result1["Jason"], 1);
  });
  it('returns undefined for result1["Karima"]', () => {
    assert.equal(result1["Karima"], undefined);
  });
  it('returns 2 for result1["Fang"]', () => {
    assert.equal(result1["Fang"], 2);
  });
  it('returns undefined for result1["Agouhanna"]', () => {
    assert.equal(result1["Agouhanna"], undefined);
  });




});