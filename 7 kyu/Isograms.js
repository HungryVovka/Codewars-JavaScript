// -----------------------------------------------------------
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that 
// contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// 
// Example: (Input --> Output)
// 
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
// -----------------------------------------------------------

function isIsogram(str) {
  if (str.length == 0) {
    return true;
  } else {
    var s = str.toLowerCase();
  } 
  var arr = s.split('');
  var sortarr = arr.slice().sort();
  for (let i = 0; i < arr.length; i++) {
    if (sortarr[i + 1] == sortarr[i]) {
      return false;
    }
  }
  return true;
}

// or

function isIsogram(str){
  let s = new Set(str.toUpperCase());
  return s.size == str.length;
}