// -----------------------------------------------------------
// Write a function which calculates the average of the numbers in a given list.
// 
// Note: Empty arrays should return 0.
// -----------------------------------------------------------

function find_average(arr){
  var sum_n = 0
  if (arr.length == 0){
    return 0;
  } else {
    let sum_n = arr.reduce((a, b) => a + b) / arr.length
    return sum_n
  }
}