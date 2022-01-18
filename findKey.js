// findKey takes in an object and callback
// scan object and return first key for callback returns truthy, no key = return undefined

const findKey = (object, callback) => {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }

};

module.exports = findKey;
