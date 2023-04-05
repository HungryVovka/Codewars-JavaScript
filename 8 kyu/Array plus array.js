// -----------------------------------------------------------
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// 
// P.S. Each array includes only integer numbers. Output is a number too.
// -----------------------------------------------------------

function arrayPlusArray(arr1, arr2) {
	var sum_a = 0;
	for (var n = 0; n < arr1.length; n++){
		sum_a += arr1[n]
	}
	for (var p = 0; p < arr2.length; p++){
		sum_a += arr2[p]
	}
	return sum_a;
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