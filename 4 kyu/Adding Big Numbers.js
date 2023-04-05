// -----------------------------------------------------------
// We need to sum big numbers and we require your help.
// 
// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// 
// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// 
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives
// -----------------------------------------------------------

function add(a, b) {
    a = a.split("");
    b = b.split("");
    var bignum = "", tote = 0;
    while (a.length || b.length || tote){
        tote += ~~a.pop() + ~~b.pop();
        bignum = tote % 10 + bignum;
        tote = tote > 9;
    }
    return bignum;
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