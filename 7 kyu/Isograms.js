// -----------------------------------------------------------
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that 
// contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// 
// Example: (Input --> Output)
// 
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
// -----------------------------------------------------------

function isIsogram(str) {
	if (str.length == 0) {
		return true;
	} else {
		var s = str.toLowerCase();
	} 
	var arr = s.split('');
	var sortarr = arr.slice().sort();
	for (let i = 0; i < arr.length; i++) {
		if (sortarr[i + 1] == sortarr[i]) {
			return false;
		}
	}
	return true;
}

// or

function isIsogram(str){
	let s = new Set(str.toUpperCase());
	return s.size == str.length;
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