// -----------------------------------------------------------
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// 
// The function takes a name as its only argument, and returns one of the following strings:
// 
// name + " plays banjo" 
// name + " does not play banjo"
// 
// Names given are always valid strings.
// -----------------------------------------------------------

function areYouPlayingBanjo(name) {
	if (name.toLowerCase().charAt(0) === 'r'){
		return name + ' plays banjo';
	} else {
		return name + ' does not play banjo';
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