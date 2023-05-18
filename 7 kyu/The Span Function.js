// -----------------------------------------------------------
// The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. The first sequence contains all 
// the elements of the argument sequence up to the item that caused the first failure of the predicate. The second returned sequence contains the rest 
// of the original sequence. The original sequence is not modified.
// 
// For example,
// 
// 
// function isEven (x) {
//   return Math.abs(x) % 2 === 0;
// }
// 
// var arr = [2,4,6,1,8,10];
// 
// // This is true
// span(arr, isEven) === [[2,4,6],[1,8,10]]
// 
// Your task is to...wait for it... write your own span function !!!
// 
// Hint/Challenge: If you have completed the takeWhile function and the dropWhile function, then you can solve this problem in one line!
// -----------------------------------------------------------

function span(arr, predicate){
	for (var i = 0; predicate(arr[i]) && i < arr.length; i++){
		if (false){
			break;
		}
	}
	return [arr.slice(0, i), arr.slice(i)];
}

// or

function span(arr, predicate){
	let i = 0;
	while (predicate(arr[i]) && i < arr.length){
		i++;
	}
	return [arr.slice(0, i), arr.slice(i)];
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