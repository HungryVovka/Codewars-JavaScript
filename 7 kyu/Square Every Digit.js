// -----------------------------------------------------------
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// 
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// 
// Note: The function accepts an integer and returns an integer
// -----------------------------------------------------------

function squareDigits(num){
	var numbers = num.toString().split('').map(n => n * n).join('');
	return parseInt(numbers);
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