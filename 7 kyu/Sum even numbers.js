// -----------------------------------------------------------
// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.
// 
// Only numbers without decimals like 4 or 4.0 can be even.
// 
// The input is a sequence of numbers: integers and/or floats.
// 
// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0
// -----------------------------------------------------------

function sumEvenNumbers(input) {
	var arr = [];
	for (let i = 0; i < input.length; i++){
		if (input[i] % 2 == 0){
			arr.push(input[i]);
		} else {
			continue;
		}
	}
	return arr.reduce((a, b) => a + b) || arr[0] || 0;
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