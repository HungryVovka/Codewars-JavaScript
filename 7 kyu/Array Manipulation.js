// -----------------------------------------------------------
// Given an array of positive integers, replace every element with the least greater element to its right. If there is no greater element to its right, 
// replace it with -1. For instance, given the array
// 
// [8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28],
// 
// the desired output is
// 
// [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1].
// 
// Your task is to create a function "arrayManip()" that takes in an array as its argument, manipulates the array as described above, then return the 
// resulting array.
// 
// Note: Return a new array, rather than modifying the passed array.
// -----------------------------------------------------------

function arrayManip(array){
	return array.map((a, b) => {
		const replacing = array.filter((c, d) => a < c && b < d);
		if (replacing.length !== 0){
			return Math.min(...replacing);
		} else {
			return -1;
		}
	})
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