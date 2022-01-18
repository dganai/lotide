const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // for in loop
  let string = sentence;
  for (let index in string) {
    let letter = string[index];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(+index);
      } else {
        results[letter] = [+index];
      }
    }
  }
  // console.log(results);

  return results;
};




module.exports = letterPositions;