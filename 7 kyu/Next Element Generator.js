// -----------------------------------------------------------
// In this Kata you will learn how to build javascript generators functions.
// 
// Generators are functions that can be exited and later re-entered. Their context will be saved across re-entrances.
// 
// Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead.
// 
// Build a generator function which gets called with an array.
// 
// You only gonna be passed an array with numbers - it will never be empty.
// 
// Example:
// 
// const generator = nextElementGenerator([1,2,3,4,5,6,7])
// generator.next().value -> 1
// generator.next().value -> 2
// generator.next().value -> 3
// 
// Each next() call on the returned iterator object should generate the next element in the previously given array with length n. If it gets called more 
// then n times, do NOT return undefined.
// Instead, start at the first element again.
// 
// Example:
// 
// const generator = nextElementGenerator([1,2,3])
// generator.next().value -> 1
// generator.next().value -> 2
// generator.next().value -> 3
// generator.next().value -> 1
// generator.next().value -> 2
// generator.next().value -> 3
// generator.next().value -> 1
// 
// Hint:
// 
// You can learn about generators here:
// Generator Functions(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
// -----------------------------------------------------------

function* nextElementGenerator(array){
	while (true){
		yield* array;
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