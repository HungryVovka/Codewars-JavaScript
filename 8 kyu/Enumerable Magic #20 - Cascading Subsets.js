// -----------------------------------------------------------
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
// 
// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]
// 
// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
//   
// As you can see, the lists are cascading; ie, they overlap, but never out of order.
// -----------------------------------------------------------

function eachCons(array, n) {
	var arr = [];
	for (let i = n, j = 0; i <= array.length; i++, j++){
		arr.push(array.slice(j, i));
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