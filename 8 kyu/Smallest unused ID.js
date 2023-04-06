// -----------------------------------------------------------
// Hey awesome programmer!
// 
// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
// 
// Therefore you need a method, which returns the smallest unused ID for your next new data item...
// 
// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
// 
// Go on and code some pure awesomeness!
// -----------------------------------------------------------

function nextId(ids){
	let x = 0;
	while (ids.includes(x)){
		x += 1;
	}
	return x;
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