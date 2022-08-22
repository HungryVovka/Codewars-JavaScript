// -----------------------------------------------------------
// Given an array of integers, return a new array with each value doubled.
// 
// For example:
// 
// [1, 2, 3] --> [2, 4, 6]
// -----------------------------------------------------------

function maps(x){
  var arr = []
  x.forEach(i => {
    arr.push(i * 2);
  });
  return arr;
}