// -----------------------------------------------------------
// Iterators
// Description
// Iterator objects enable custom iteration like CLR IEnumerable or Java Iterable. Generalize for..in to custom iterator-based iteration with for..of. 
// Don’t require realizing an array, enabling lazy design patterns like LINQ.
// 
// Task
// Your task is simple, create a counter that increments by 1 each time. You must use the iterator described below. Good luck!
// 
// Example
// let fibonacci = {
// 	[Symbol.iterator]() {
// 		let pre = 0, cur = 1;
// 		return {
// 			next() {
// 				[pre, cur] = [cur, pre + cur];
// 				return { done: false, value: cur }
// 			}
// 		}
// 	}
// }
// 
// for (let n of fibonacci) {
// 	// truncate the sequence at 1000
// 	if (n > 1000)
// 		break;
// 	console.log(n);
// }
// 
// Reading: Iterators and Generators(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
// -----------------------------------------------------------

let counter = {
	*[Symbol.iterator](){
		let i = 1;
		while (true){
			yield i++;
		}
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