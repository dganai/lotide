// eqObjects must take in two objects and return true or false
const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  let keyA = Object.keys(object1);
  let keyB = Object.keys(object2);

  if (keyA.length === keyB.length) {
    for (let key of keyA) {
      if (Array.isArray(object1[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } return false;
};


module.exports = eqObjects;