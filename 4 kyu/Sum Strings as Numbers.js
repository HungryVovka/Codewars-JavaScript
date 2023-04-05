// -----------------------------------------------------------
// Given the string representations of two integers, return the string representation of the sum of those integers.
// 
// For example:
// 
// sumStrings('1','2') // => '3'
// 
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
// -----------------------------------------------------------

function sumStrings(a,b) { 
    return ((BigInt(a)) + BigInt(b)).toString();
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