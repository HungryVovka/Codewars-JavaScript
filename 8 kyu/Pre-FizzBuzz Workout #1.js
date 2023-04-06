// -----------------------------------------------------------
// This is the first step to understanding FizzBuzz.
// 
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// 
// Your expected output is an array of positive integers from 1 to n (inclusive).
// 
// Your job is to write an algorithm that gets you from the input to the output.
// -----------------------------------------------------------

function preFizz(n) {
	let arr = [], i = 0;
	while (i < n){
		arr.push(i + 1);
		i++;
	}
	return arr;
}

// or

function preFizz(n) {
	return Array.from({length: n}, (a, b) => b + 1);
}

// or

function preFizz(n) {
	return [...Array(n)].map((a, b) => b + 1);
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