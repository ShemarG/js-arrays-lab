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
function abbrevName(string) {
  //Write your code here
  let arr = (string.replace(" ", ".")).split("")
  let output = ''
  arr.forEach(item => item === item.toUpperCase() ? output += `${item}` : null)
  return output
}

// Question 5
function makeTitle(str) {
  // Write your code here
  let cap = str.split(" ")
  let strs = []
  cap.forEach(element => {
      let letters = element.split("")
      letters[0] = letters[0].toUpperCase()
      let m = letters.join("")
      strs.push(m) 
   })
  return strs.join(" ") 
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
