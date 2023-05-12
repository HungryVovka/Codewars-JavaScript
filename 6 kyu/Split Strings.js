// -----------------------------------------------------------
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should 
// replace the missing second character of the final pair with an underscore ('_').
// 
// Examples:
// 
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
// -----------------------------------------------------------

function solution(s){
	let arr = [];
	if (s.length % 2 != 0){
		s += "_";
	}
	let letters = [...s];
	let pair = "";
	for (let i of letters){
		pair += i;
		if (pair.length === 2){
			arr.push(pair);
			pair = "";
		}
	}
	return arr;
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