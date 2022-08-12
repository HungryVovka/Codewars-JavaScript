// -----------------------------------------------------------
// This time no story, no theory. The examples below show you how to write function accum:
// 
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// 
// The parameter of accum is a string which includes only letters from a..z and A..Z.
// -----------------------------------------------------------

function accum(s) {
  let arr = [];
  for (var i = 0; i < s.length; i++) {
    let mubb = '';
    for (var j = 0; j < i + 1; j++){
      mubb += j === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
    }
    arr.push(mubb);
  }
  return arr.join('-');
}