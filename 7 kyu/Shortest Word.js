// -----------------------------------------------------------
// Simple, given a string of words, return the length of the shortest word(s).
// 
// String will never be empty and you do not need to account for different data types.
// -----------------------------------------------------------

function findShort(s){
  let l = s.split(' ');
  let w = Infinity;
  for (var i = 0; i < l.length; i++){
   w = Math.min(l[i].length, w);
  }
  return w;
}