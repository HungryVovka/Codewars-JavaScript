// -----------------------------------------------------------
// Lexical this
// Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
// 
// Output
// Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// -----------------------------------------------------------

var Person = function(){
	var person = {
		_name: "Leroy",
		_friends: [],
		fillFriends(friend){
			this._friends = friend;
		}
	}
	return person;
};

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