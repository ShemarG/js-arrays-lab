// Question 1
function average(array) {
  // Write your code here
  let x = 0
  for (let i = 0; i < array.length; i++) {
    x += array[i]
  }
 return x / array.length
}

// Question 2
function combineArrays(arr1, arr2) {
  // Write your code here
  return arr1.concat(arr2)
}

// Question 3
function arrayPlusArray(arr1, arr2) {
  // Write your code here
 const reducer = (accumulator, currentValue) => accumulator + currentValue;
 let x = arr1.concat(arr2)
 return x.reduce(reducer)
}

// Question 4
function abbrevName() {
  //Write your code here
}

// Question 5
function makeTitle() {
  // Write your code here
}

// Question 6
function gimme() {
  // Write your code here
}

// Do NOT touch or write anything below this line
module.exports = {
  average,
  combineArrays,
  arrayPlusArray,
  abbrevName,
  makeTitle,
  gimme
};
