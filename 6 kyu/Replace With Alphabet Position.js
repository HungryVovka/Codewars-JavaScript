// -----------------------------------------------------------
// Welcome.
// 
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// 
// If anything in the text isn't a letter, ignore it and don't return it.
// 
// "a" = 1, "b" = 2, etc.
// 
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// 
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
// -----------------------------------------------------------

function alphabetPosition(text) {
  var newtext = text.split("");
  var repl = newtext.map(i => {
    return i.toLowerCase().charCodeAt()-96;
  });
  var replaced = repl.filter(j => {
    return (0 < j) && (j < 27);
  });
  return replaced.join(" ");
}

// or

function alphabetPosition(text) {
  var answer = "";
  for (let i = 0; i < text.length; i++){
    let j = text.toUpperCase().charCodeAt(i);
    if (j > 64 && j < 91){
      answer += (j - 64) + " ";
    }
  }
  return answer.slice(0, answer.length - 1);
}
