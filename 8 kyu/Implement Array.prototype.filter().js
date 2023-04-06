// -----------------------------------------------------------
// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is 
// _.filter() in underscore.js and lodash.js.
// 
// The usage will be quite simple, like:
// 
// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// 
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.
// 
// More info can be found here:
// 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// -----------------------------------------------------------

Array.prototype.filter = function(f){
	var arr = [];
	for (let i = 0; i < this.length; i++){
		if (f(this[i])){
			arr.push(this[i]);
		}
	}
	return arr;
}

// or

Array.prototype.filter = function (f){
	return this.reduce((i, j) => f(j) ? [...i, j] : i, []);
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