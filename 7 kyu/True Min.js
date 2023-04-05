// -----------------------------------------------------------
// The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle 
// everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.
// 
// Note: This min function need not handle more than two arguments.
// 
// function min(a, b){
//   return (a<b)?a:b;
// }
// -----------------------------------------------------------

function min(a, b){
	if (isNaN(a) || isNaN(b)){return NaN};
	return (a < b) ? +a : +b;
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