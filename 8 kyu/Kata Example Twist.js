// -----------------------------------------------------------
// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
// 
// Add the value "codewars" to the array websites/Websites 1,000 times.
// -----------------------------------------------------------

var websites = [];
while(websites.length < 1000){
	websites.push("codewars");
};

// or

var websites = new Array(1000).fill("codewars");

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