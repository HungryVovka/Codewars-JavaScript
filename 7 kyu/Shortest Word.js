// -----------------------------------------------------------
// Simple, given a string of words, return the length of the shortest word(s).
// 
// String will never be empty and you do not need to account for different data types.
// -----------------------------------------------------------

function findShort(s){
	let l = s.split(' ');
	let w = Infinity;
	for (var i = 0; i < l.length; i++){
	 w = Math.min(l[i].length, w);
	}
	return w;
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