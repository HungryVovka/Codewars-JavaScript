// -----------------------------------------------------------
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// 
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// 
// All inputs will be valid.
// -----------------------------------------------------------

const last = sortby => {
	return sortby.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
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