// -----------------------------------------------------------
// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
// 
// A few cases:
// 
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false
// 
// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true
// 
// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true
// -----------------------------------------------------------

function isDivideBy(number, a, b) {
	if (number % a == 0 && number % b == 0){
		return (true);
	} else {
		return (false);
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