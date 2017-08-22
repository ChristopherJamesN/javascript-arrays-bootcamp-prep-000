var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (arr, elm) {
  var newArr = [elm, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray (arr, elm) {
  arr = [elm, ...arr];
  return arr;
}

function addElementToEndOfArray (arr, elm) {
 var newArr = arr.push(elm);
 return newArr;
}

function destructivelyAddElementToEndOfArray (arr, elm) {
  arr = arr.push(elm);
  return arr;
}

function accessElementInArray (arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}
