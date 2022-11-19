// -----------------------------------------------------------
// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are 
// passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
// 
// Here is a list of functions, we need:
// 
// Math.round()
// Math.ceil()
// Math.floor()
// -----------------------------------------------------------

Math.floor = function(n){
  return parseInt(n);
};

Math.round = function(n){
  return Math.floor(n + 0.5);
};

Math.ceil = function(n){
  return !Number.isInteger(n) ? Math.floor(n) + 1 : n; 
};