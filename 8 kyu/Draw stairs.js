// -----------------------------------------------------------
// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
// 
// For example n = 3 result in:
// 
// "I\n I\n  I"
// 
// or printed:
// 
// I
//  I
//   I
//   
// Another example, a 7-step stairs should be drawn like this:
// 
// I
//  I
//   I
//    I
//     I
//      I
//       I
// -----------------------------------------------------------

function drawStairs(n) {
	var answer = [];
	for (let i = 0; i < n; i++){
		answer[i] = `${' '.repeat(i)}I`;
	}
	return answer.join('\n');
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