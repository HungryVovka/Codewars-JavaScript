// -----------------------------------------------------------
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
// 
// Goodluck :)
// 
// Check my other katas:
// 
// Alphabetically ordered
// 
// Case-sensitive!
// 
// Not prime numbers
// -----------------------------------------------------------

function nearestSq(n){
	var sqBefore = parseInt(Math.sqrt(n))**2;
	var sqAfter = (parseInt(Math.sqrt(n)) + 1)**2;
	if (Math.abs(n - sqBefore) < Math.abs(n - sqAfter)){
		return sqBefore;
	} else {
		return sqAfter;
	}
}

// or

function nearestSq(n){
	return Math.round(n**0.5)**2;
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