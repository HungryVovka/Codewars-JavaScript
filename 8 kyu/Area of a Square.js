// -----------------------------------------------------------
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result 
// rounded to two decimals.
// 
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
// -----------------------------------------------------------

function squareArea(A){
	return +(((2 * A) / Math.PI)**2).toFixed(2);
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