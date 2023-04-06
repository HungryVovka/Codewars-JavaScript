// -----------------------------------------------------------
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// 
// If they are, change the array value to a string of that vowel.
// 
// Return the resulting array.
// -----------------------------------------------------------

function isVow(a){
	for (let i = 0; i < a.length; i++){
		let chrCode = String.fromCharCode(a[i]);
		if ("aeiou".indexOf(chrCode) != -1){
			a[i] = chrCode;
		}
	}
	return a;
}

// or

function isVow(a){
	return a.map(i => "aeiou".includes(j = String.fromCharCode(i)) ? j : i);
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