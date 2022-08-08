// -----------------------------------------------------------
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the 
// name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// 
// Examples:
// 
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"
// -----------------------------------------------------------

function spinWords(string){
  let reversed = new Array();
  let spl_str = string.split(" ");
  for (let i = 0; i < spl_str.length; i++){
    if (spl_str[i].length > 4){
      reversed.push(spl_str[i].split("").reverse().join(""));
    } else {
      reversed.push(spl_str[i]);
    }
  }
  return reversed.join(" ");
}