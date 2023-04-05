// -----------------------------------------------------------
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of 
// numbers and the second is the divisor.
// 
// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
// -----------------------------------------------------------

function divisibleBy(numbers, divisor){
	var answer = [];
	for (let i = 0; i < numbers.length; i++){
		if (numbers[i] % divisor == 0){
			answer.push(numbers[i]);
		}
	}
	return answer;
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