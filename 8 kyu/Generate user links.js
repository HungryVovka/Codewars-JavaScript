// -----------------------------------------------------------
// Generate user links
// Your task is to create userlinks for the url, you will be given a username and must return a valid link.
// 
// Example
// generate_link('matt c')
// http://www.codewars.com/users/matt%20c
// 
// reference
// use this as a reference encoding
// -----------------------------------------------------------

function generateLink(user){
	return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
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