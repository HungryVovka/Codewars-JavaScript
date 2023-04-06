// -----------------------------------------------------------
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// 
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// 
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
// -----------------------------------------------------------

function highAndLow(numbers){
  let nArr = numbers.split(" ");
  let arr = [];
  for (let n = 0; n < nArr.length; n++){
    arr.push(parseInt(nArr[n]));
  }
  return `${Math.max.apply(null, arr)} ${Math.min.apply(null, arr)}`;
}

// or

function highAndLow(numbers){
  let nArr = numbers.split(" ").map(Number);
  return `${Math.max.apply(null, nArr)} ${Math.min.apply(null, nArr)}`;
}

// -----------------------------------------------------------
// License
// Tasks are the property of Codewars (https://www.codewars.com/) 
// and users of this resource.
// 
// All solution code in this repository 
// is the personal property of Vladimir Rukavishnikov
// (vladimirrukavishnikovmail@gmail.com).
// 
// Copyright (C) 2022 Vladimir Rukavishnikov
// 
// This file is part of the HungryVovka/Codewars-JavaScript
// (https://github.com/HungryVovka/Codewars-JavaScript)
// 
// License is GNU General Public License v3.0
// (https://github.com/HungryVovka/Codewars-JavaScript/blob/main/LICENSE)
// 
// You should have received a copy of the GNU General Public License v3.0
// along with this code. If not, see http://www.gnu.org/licenses/
// -----------------------------------------------------------