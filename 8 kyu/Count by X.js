// -----------------------------------------------------------
// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// 
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// 
// Return the results as an array (or list in Python, Haskell or Elixir).
// 
// Examples:
// 
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
// -----------------------------------------------------------

function countBy(x, n) {
	let z = [];
	let a = x;
	while(a <= x * n){
		z.push(a);
		a += x;
	}
	return z;
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