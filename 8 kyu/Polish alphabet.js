// ---------------------------------------------------------
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
// 
// Your task is to change the letters with diacritics:
// 
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// 
// and print out the string without the use of the Polish letters.
// 
// For example:
// 
// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
// ---------------------------------------------------------

function correctPolishLetters (string){
  var diactritic = {
    "ą" : "a",
    "ć" : "c",
    "ę" : "e",
    "ł" : "l",
    "ń" : "n",
    "ó" : "o",
    "ś" : "s",
    "ź" : "z",
    "ż" : "z",
  }
  return string.split("").map((i) => diactritic[i] || i).join("");
}

// or

function correctPolishLetters (string){
  return string.replace(/[ąćęłńóśźż]/g, i => "acelnoszz"["ąćęłńóśźż".indexOf(i)]);
}