// -----------------------------------------------------------
// Complete the solution so that it reverses the string passed into it.
// 
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// -----------------------------------------------------------

function solution(str){
  var arr = [...str];
  return arr.reverse().join("");
}