// -----------------------------------------------------------
// In JavaScript, there is a special case where strict comparison of the same variable returns false! Try to find out what must be done to get such result!
// 
// var x = something;
// x === x // returns false!
// 
// Write a function which will return value for which strict comparison will give false!
// -----------------------------------------------------------

function findStrangeValue(){
	return +"HungryVovka";
}

// or

function findStrangeValue(){
	return NaN;
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