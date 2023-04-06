// -----------------------------------------------------------
// I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had 
// expected it to be more discerning, but it's returning true for undefined right now.
// 
// Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.
// 
// Any solution is acceptable!
// -----------------------------------------------------------

const isReallyNaN = val => {
	return Number.isNaN(val);
};

// or

const isReallyNaN = val => {
	return val != val;
};

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