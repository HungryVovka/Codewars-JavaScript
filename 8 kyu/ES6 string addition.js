// -----------------------------------------------------------
// It is easy to join two strings together like this string1 + string2.
// 
// Another way to get the desired result would be with string1.concat(string2)
// 
// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there 
// must be a space between the two strings.
// 
// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!
// 
// If one of the arguments is a number your code must coerce it into being a string.
// -----------------------------------------------------------

function joinStrings(string1, string2){
	return `${string1} ${string2}`;
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