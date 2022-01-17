// create middle
// take in an array and return middle most elements of given array
// exceptions: if elements 1 or 2, return empty array
// odd number of elements: return single middle element
// even number of elements: return two elements in middle

const middle =  function(array) {
  let newArray = [];
  let theMiddle = array[Math.floor(array.length / 2)];
  let numOfElements = array.length;
  
  if (numOfElements <= 2) {
    newArray = [];
  }
  if (numOfElements > 2) {
    if (numOfElements % 2 === 0) { // even number of elements
      newArray = [array[theMiddle] - 2, array[theMiddle] - 1];
    } else if (numOfElements % 2 === 1) {// odd number elements
      newArray = [theMiddle];
    
    }
  }
  // console.log(newArray);
  return newArray;
};



module.exports = middle;