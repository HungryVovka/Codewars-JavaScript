// -----------------------------------------------------------
// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question 
// mark, in which case, returns the original string.
// 
// For example (Input --> Output)
// 
// "Yes" --> "Yes?" 
// "No?" --> "No?"
// -----------------------------------------------------------

function ensureQuestion(s) {
	return s.split("?").join("").concat("?");
}

// or

function ensureQuestion(s) {
	return /\?$/.test(s) ? s : s + "?";
}

// or

function ensureQuestion(s) {
	return s.includes("?") ? s : `${s}?`;
}

// or

function ensureQuestion(s) {
	return s.endsWith("?") ? s : s + "?";
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