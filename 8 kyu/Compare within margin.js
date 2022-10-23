// ---------------------------------------------------------
// Create a function close_compare that accepts 3 parameters: a, b, and an optional main. The function should return whether a is lower than, 
// close to, or higher than 
// 
// a is considered "close to" b if margin is greater than or equal to the distance beten a and b.
// 
// Please note the followin
// 
// When a is close to b, return 
// Otherwise.
// 
// When a is less than b, return -
// 
// When a is greater than b, return 
// 
// If margin is not given, treat it as zer
// 
// Assume: margin >=
// 
// Tip: Some languages have a way to make parameters optiona
// 
// Example
// If a =  b = 5, and margin = 3, then close_compare(a, b, margin) should return 
// 
// This is because a and b are no more than 3 numbers apar
// 
// Example
// If a =  b = 5, and margin = 0, then close_compare(a, b, margin) should return -
// 
// This is because the distance between a and b is greater than 0, and a is less than 
// ---------------------------------------------------------

function closeCompare(a, b, margin){
  if (a == b || margin >= Math.abs(a - b)){
    return 0;
  } else if (a < b){
    return -1;
  } else if (a > b){
    return 1;
  }
}