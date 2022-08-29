// -----------------------------------------------------------
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
// 
// Goodluck :)
// 
// Check my other katas:
// 
// Alphabetically ordered
// 
// Case-sensitive!
// 
// Not prime numbers
// -----------------------------------------------------------

function nearestSq(n){
  var sqBefore = parseInt(Math.sqrt(n))**2;
  var sqAfter = (parseInt(Math.sqrt(n)) + 1)**2;
  if (Math.abs(n - sqBefore) < Math.abs(n - sqAfter)){
    return sqBefore;
  } else {
    return sqAfter;
  }
}

// or

function nearestSq(n){
  return Math.round(n**0.5)**2;
}