// -----------------------------------------------------------
// Wilson primes satisfy the following condition. Let P represent a prime number.
// 
// Then,
// 
// ((P-1)! + 1) / (P * P)
// 
// should give a whole number.
// 
// Your task is to create a function that returns true if the given number is a Wilson prime.
// -----------------------------------------------------------

const wilson_primes = [5, 13, 563];

function amIWilson(n) {
	return wilson_primes.includes(n);
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