// -----------------------------------------------------------
// In this Kata we are passing a number (n) into a function.
// 
// Your code will determine if the number passed is even (or not).
// 
// The function needs to return either a true or false.
// 
// Numbers may be positive or negative, integers or floats.
// 
// Floats with decimal part non equal to zero are considered UNeven for this kata.
// -----------------------------------------------------------

function testEven(n) {
	if (n % 2 == 0){
		return(true);
	} else {
		return(false);
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