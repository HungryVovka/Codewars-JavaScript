// -----------------------------------------------------------
// Write a function that will check if two given characters are the same case.
// 
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// 
// Examples
// 'a' and 'g' returns 1
// 
// 'A' and 'C' returns 1
// 
// 'b' and 'G' returns 0
// 
// 'B' and 'g' returns 0
// 
// '0' and '?' returns -1
// -----------------------------------------------------------

var lowLet = "abcdefghijklmnopqrstuvwxyz";

function sameCase(a, b){
  if(!lowLet.includes(a.toLowerCase()) || !lowLet.includes(b.toLowerCase())){
    return -1;
  }
  return caseCompare(a) == caseCompare(b) ? 1 : 0;
}

function caseCompare(c){
  if (c == c.toLowerCase()){
    return "lower";
  } else {
    return "upper";
  }
}