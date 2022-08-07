// -----------------------------------------------------------
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// 
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
// -----------------------------------------------------------

function pigIt(str){
  answer = str.split(" ")
    .map(i => i.match(/\w/) ? i.slice(1) + i.slice(0, 1) + "ay" : i)
    .join(" ");
  return answer;
}