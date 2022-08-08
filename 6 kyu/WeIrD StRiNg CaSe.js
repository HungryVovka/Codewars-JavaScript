// -----------------------------------------------------------
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word 
// upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, 
// therefore that character should be upper cased and you need to start over for each word.
// 
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will 
// be separated by a single space(' ').
// 
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
// -----------------------------------------------------------

function toWeirdCase(words){
  let i = 0;
  let weird = "";
  for (let j = 0; j < words.length; j++){
    if (words[j] == " "){
      i = -1
      weird += words[j];
    } else if (i % 2 == 0){
      weird += words[j].toUpperCase();
    } else {
      weird += words[j].toLowerCase();
    }
    i += 1
  }
  return weird;
}