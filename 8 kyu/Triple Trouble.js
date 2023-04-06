// -----------------------------------------------------------
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the 
// inputs and grouping them next to each other. Do this for every letter, see example below!
// 
// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
// 
// Note: You can expect all of the inputs to be the same length.
// -----------------------------------------------------------

function tripleTrouble(one, two, three){
	var answer = "";
	for (let i = 0; i < one.length; i++){
		answer += one[i] + two[i] + three[i];
	}
	return answer;
}

// or

function tripleTrouble(one, two, three){
	return one.replace(/./g, (a, b) => a + two[b] + three[b]);
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