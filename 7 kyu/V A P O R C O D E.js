// -----------------------------------------------------------
// ASC Week 1 Challenge 4 (Medium #1)
// 
// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, 
// and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
// 
// Note that spaces should be ignored in this case.
// 
// Examples
// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
// -----------------------------------------------------------

function vaporcode(s) {
	var s = s.toUpperCase().split("");
	var answer = [];
	for (let i = 0; i < s.length; i++){
		if (s[i] != " "){
			answer.push(s[i]);
		}
	}
	return answer.join("  ");
}

// or

function vaporcode(s) {
	return s.toUpperCase().replace(/\s+/g, "").split("").join("  ");
}

// or

function vaporcode(s) {
	return Array.from(s.replace(/ /g, "").toUpperCase()).join("  ");
}

// or

function vaporcode(s) {
	return s.toUpperCase().match(/[^ ]/g).join("  ");
}

// or

function vaporcode(s) {
	return s.toUpperCase().match(/\S/g).join("  ");
}

// or

function vaporcode(s) {
	return s.toUpperCase().split(" ").join("").split("").join("  ");
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