// -----------------------------------------------------------
// Functional closures can get overly attached. Set them straight!
// 
// Why doesn't greet_abe() actually greet Abe?
// -----------------------------------------------------------

var greet_abe = function(){
	var name = 'Abe';
	return "Hello, " + name + "!";
};

var greet_ben = function() {
	var name = 'Ben';
	return "Hello, " + name + "!";
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