// -----------------------------------------------------------
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// 
// Example: (Input1, Input2 -->Output)
// 
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// 
// Notes:
// 
// If either input is an empty string, consider it as zero.
// 
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
// -----------------------------------------------------------

function sumStr(a,b) {
	return String(Number(a) + Number(b));
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