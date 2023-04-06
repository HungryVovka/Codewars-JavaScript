// -----------------------------------------------------------
// Write a method, that will get an integer array as parameter and will process every number from this array.
// 
// Return a new array with processing every number of the input-array like this:
// 
// If the number has an integer square root, take this, otherwise square the number.
// 
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// 
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.
// -----------------------------------------------------------

function squareOrSquareRoot(array) {
	var newArr = [];
	for (var i=0; i<array.length; i++){
		var j = array[i];
		if (Math.sqrt(j) == Math.floor(Math.sqrt(j))){
			newArr.push(Math.sqrt(j));
		} else {
			newArr.push(j * j)
		}
	}
	return newArr;
}

// or

function squareOrSquareRoot(array) {
	return array.map(i => {
		let root = Math.sqrt(i);
		return (root % 1) == 0 ? root : i * i;
	});
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