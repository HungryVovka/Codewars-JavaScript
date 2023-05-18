// -----------------------------------------------------------
// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.
// 
// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.
// 
// So:
// 
// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.
// -----------------------------------------------------------

function mostLikely(prob1, prob2){
	prob1 = prob1.split(":");
	prob2 = prob2.split(":");
	let a = Number(prob1[0]) / Number(prob1[1]);
	let b = Number(prob2[0]) / Number(prob2[1]);
	return a > b;
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