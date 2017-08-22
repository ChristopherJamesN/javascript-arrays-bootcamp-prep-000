var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (arr, elm) {
  newArr = [elm, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray (arr, elm) {
  arr = [elm, ...arr];
  return arr;
}

function addElementToEndOfArray (arr, elm) {
 newArr = arr.push(elm);
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

function removeElementFromBeginningOfArray(arr) {
  newArr = arr.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  newArr = arr.slice(0, arr.length-1);
  return newArr;
}
