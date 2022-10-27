// -----------------------------------------------------------
// This is the first step to understanding FizzBuzz.
// 
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// 
// Your expected output is an array of positive integers from 1 to n (inclusive).
// 
// Your job is to write an algorithm that gets you from the input to the output.
// -----------------------------------------------------------

function preFizz(n) {
  let arr = [], i = 0;
  while (i < n){
    arr.push(i + 1);
    i++;
  }
  return arr;
}

// or

function preFizz(n) {
  return Array.from({length: n}, (a, b) => b + 1);
}

// or

function preFizz(n) {
  return [...Array(n)].map((a, b) => b + 1);
}