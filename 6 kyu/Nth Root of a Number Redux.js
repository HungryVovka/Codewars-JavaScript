// -----------------------------------------------------------
// This kata is part of a series on computing the nth root of a number. It was inspired by [Nth Root of a Number][series-1] 
// by [@afonsomatos][afonso]. Make sure you solve the [previous part][series-1] before you try this one.
// 
// Task
// Given two numbers x and n, calculate the nth root of x, e.g. r such that r^n = x. However, you're working with some kind of legacy API that 
// doesn't contain a helpful function for this task (see end of the description).
// 
// Examples
// root(4, 2);   // 2
// root(8, 3);   // 2
// root(256, 4); // 4
// root(9, 2);   // 3
// 
// Disabled functions
// Spoilers ahead!
// The following description contains hints on another kata. Make sure that you've solved [the previous part of the series]
// [series-1] before you read the next part.
// 
// The power function of your language (e.g. Math.pow in JavaScript, ** in Haskell) has been disabled. Good luck.
// -----------------------------------------------------------

var root = function(x, n){
    return Math.exp(Math.log(x)/n);
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