// -----------------------------------------------------------
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of 
// digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// 
// For example, take 153 (3 digits), which is narcissistic:
// 
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// 
// and 1652 (4 digits), which isn't:
// 
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// 
// The Challenge:
// 
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
// 
// This may be True and False in your language, e.g. PHP.
// 
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
// -----------------------------------------------------------

function narcissistic(value){
	let valueStr = String(value);
	let resultingNum = 0;
	for (let i of valueStr){
		resultingNum += Number(i)**valueStr.length;
	}
	return resultingNum === value;
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