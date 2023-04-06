// -----------------------------------------------------------
// 1 < 2 < 3 === true right? but could
// 
// 3 < 2 < 1 === true too??
// 
// Here's your puzzle: Write a function greaterThanLessThan that takes three arguments, a, b, and c, and returns a boolean (true or false), such that:
// 
// greaterThanLessThan(1, 2 3) === true
// 
// and
// 
// greaterThanLessThan(3, 2 1) === true
// 
// But also
// 
// graterThanLessThan(-3, -2, -1) == false
// 
// with more examples on the expected behavior in the test cases.
// 
// Hints
// Arguments do not necessarily have to be in strict ascending or descending order, as indicated by the example test cases.
// 
// Check out the included test cases - not all arguments are going to return true! It's up to you to figure out which ones do and which ones don't.
// 
// This challenge is a LOT easier than it might seem at first. Don't focus too much on building functions - just pay attention to precedence.
// 
// Best of luck!
// 
// Need some pointers? Brush up on your operator precedence here and you'll figure it out:
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// 
// Don't forget your primitives either:
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive
// -----------------------------------------------------------

function greaterThanLessThan (a, b, c){
	return a < b < c;
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