// -----------------------------------------------------------
// Your task is to sum the differences between consecutive pairs in the array in descending order.
// 
// Example
// [2, 1, 10]  -->  9
// 
// In descending order: [10, 2, 1]
// 
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// 
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
// -----------------------------------------------------------

function sumOfDifferences(arr) {
	return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
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