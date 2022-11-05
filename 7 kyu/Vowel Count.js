// -----------------------------------------------------------
// Return the number (count) of vowels in the given string.
// 
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// 
// The input string will only consist of lower case letters and/or spaces.
// -----------------------------------------------------------

function getCount(str){
  let vovels = ["a", "e", "i", "o", "u"];
  let answer = 0;
  str = str.split("")
  for (let i = 0; i < str.length; i++){
    if (vovels.includes(str[i].toLowerCase())) answer ++;
  }
  return answer;
}

// or

function getCount(str){
  str = str.split("");
  return str.filter(i => "aeiouAEIOU".includes(i)).length;
}

// or

function getCount(str){
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}