var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (arr, elm) {
  var newArr = arr.unshift(elm)
  return newArr
}

function destructivelyAddElementToBeginningOfArray (arr, elm) {
  arr.unshift(elm)
  return arr
}

function addElementToEndOfArray (arr, elm) {
 var newArr = arr.push(elm)
 return newArr
}

function destructivelyAddElementToEndOfArray (arr, elm) {
  arr.push(elm)
  return arr
}
