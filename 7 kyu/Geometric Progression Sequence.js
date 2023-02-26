// -----------------------------------------------------------
// In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will 
// print first n elements of the sequence with the given constant r and first element a.
// 
// Result should be separated by comma and space.
// 
// Example
// geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'
// 
// More info: https://en.wikipedia.org/wiki/Geometric_progression
// -----------------------------------------------------------

function geometricSequenceElements(a, r, n){
  let arr = [String(a)];
  for (let i = 1; i < n; i++){
    a *= r;
    arr.push(String(a));
  }
  return arr.join(", ");
}