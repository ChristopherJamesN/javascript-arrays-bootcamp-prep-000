var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (arr, elm) {
  var newArr = [elm, ...arr]
  return newArr
}

function destructivelyAddElementToBeginningOfArray (arr, elm) {
  arr = [elm, ...arr]
  return arr
}

function addElementToEndOfArray (arr, elm) {
 var newArr = [arr..., elm]
 return newArr
}

function destructivelyAddElementToEndOfArray (arr, elm) {
  arr = [arr..., elm]
  return arr
}
