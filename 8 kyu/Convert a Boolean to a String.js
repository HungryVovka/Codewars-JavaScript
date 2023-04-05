// -----------------------------------------------------------
// Implement a function which convert the given boolean value into its string representation.
// 
// Note: Only valid inputs will be given.
// -----------------------------------------------------------

function booleanToString(b){
	if (b == true){
		return 'true';
	} else if (b == false){
		return 'false';
	}
}

// or

function booleanToString(b){
	return b == true ? "true" : "false";
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