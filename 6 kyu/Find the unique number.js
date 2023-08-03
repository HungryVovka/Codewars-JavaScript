// -----------------------------------------------------------
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// 
// It’s guaranteed that array contains at least 3 numbers.
// 
// The tests contain some very huge arrays, so think about performance.
// -----------------------------------------------------------

function findUniq(arr){
	arr = arr.sort();
	if (arr[0] == arr[1]){
		return arr[arr.length - 1];
	} else {
		return arr[0];
	}
}

// or

function findUniq(arr){
	let [a, b] = new Set(arr);
	if (arr.filter(x => x === a).length < 2){
		return a;
	} else {
		return b;
	}
}

// or

function findUniq(arr){
	return arr.find(x => arr.indexOf(x) === arr.lastIndexOf(x));
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