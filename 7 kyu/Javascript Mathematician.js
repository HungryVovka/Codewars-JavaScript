// -----------------------------------------------------------
// You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.
// 
// The function should contain at least 1 argument per set.
// 
// calculate(1)(1) // should return 2
// calculate(1,1)(1) // should return 3
// calculate(1,1)(1,-1) // should return 2
// calculate(2,4)(3,7,1) // should return 17
// -----------------------------------------------------------

function calculate(...a){
	return function (...b){
		return [...a, ...b].reduce((x, y) => x + y);
	}
}

// or

const calculate = (...a) => (...b) => {
	return [].concat(a, b).reduce((x, y) => x + y, 0);
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