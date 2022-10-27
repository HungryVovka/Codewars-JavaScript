// -----------------------------------------------------------
// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.
// 
// The result should also be ordered from highest to lowest.
// 
// Examples:
// 
// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []
// -----------------------------------------------------------

function twoHighest(arr) {
  return arr.filter((a, b) => b == arr.lastIndexOf(a))
         .sort((c, d) => d - c)
         .slice(0, 2);
}

// or

function twoHighest(arr) {
  var newArr = [...new Set(arr)];
  return newArr.sort((a, b) => b - a).slice(0, 2);
}