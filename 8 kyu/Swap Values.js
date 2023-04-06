// -----------------------------------------------------------
// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't 
// changing.
// 
// Can you figure out what's wrong here?
// -----------------------------------------------------------

function swapValues(args) {
	var temp = args[0];
	args[0] = args[1];
	args[1] = temp;
}

// or

function swapValues(arr) {
	return arr.reverse();
}

// or

function swapValues() {
	arguments[0].reverse();
}

// or

function swapValues(arr) {
	arr.reverse();
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