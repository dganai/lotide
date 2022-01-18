// findKey function will search for a key on an object where its value matches a given value
// takes in object and value
// scan object, return first key which contains given value
// - if no key, return undefined

const findKeyByValue = (object, value) => {
  let keyArr = Object.keys(object);
  for (let key of keyArr) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;