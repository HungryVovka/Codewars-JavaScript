// -----------------------------------------------------------
// Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
// 
// Division by zero should return NaN.
// 
// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)
// 
// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)
// 
// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)
// 
// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)
// -----------------------------------------------------------

function remainder(n, m){
	return Math.min(n, m) == 0 ? NaN : Math.max(n, m) % Math.min(n, m); 
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