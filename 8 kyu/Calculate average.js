// -----------------------------------------------------------
// Write a function which calculates the average of the numbers in a given list.
// 
// Note: Empty arrays should return 0.
// -----------------------------------------------------------

function find_average(arr){
	var sum_n = 0
	if (arr.length == 0){
		return 0;
	} else {
		let sum_n = arr.reduce((a, b) => a + b) / arr.length
		return sum_n
	}
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