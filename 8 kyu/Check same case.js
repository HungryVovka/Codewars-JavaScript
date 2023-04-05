// -----------------------------------------------------------
// Write a function that will check if two given characters are the same case.
// 
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// 
// Examples
// 'a' and 'g' returns 1
// 
// 'A' and 'C' returns 1
// 
// 'b' and 'G' returns 0
// 
// 'B' and 'g' returns 0
// 
// '0' and '?' returns -1
// -----------------------------------------------------------

var lowLet = "abcdefghijklmnopqrstuvwxyz";

function sameCase(a, b){
	if(!lowLet.includes(a.toLowerCase()) || !lowLet.includes(b.toLowerCase())){
		return -1;
	}
	return caseCompare(a) == caseCompare(b) ? 1 : 0;
}

function caseCompare(c){
	if (c == c.toLowerCase()){
		return "lower";
	} else {
		return "upper";
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