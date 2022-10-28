// -----------------------------------------------------------
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// 
// If they are, change the array value to a string of that vowel.
// 
// Return the resulting array.
// -----------------------------------------------------------

function isVow(a){
  for (let i = 0; i < a.length; i++){
    let chrCode = String.fromCharCode(a[i]);
    if ("aeiou".indexOf(chrCode) != -1){
      a[i] = chrCode;
    }
  }
  return a;
}

// or

function isVow(a){
  return a.map(i => "aeiou".includes(j = String.fromCharCode(i)) ? j : i);
}