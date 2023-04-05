// -----------------------------------------------------------
// Be Concise II - I Need Squares
// 
// You are given a program squaresOnly that accepts an array of natural numbers up to and including 100 (and including 0) of length >= 1, array, 
// and returns a new array containing only square numbers that have appeared in the input array.
// 
// Refactor the solution to use as few characters as possible. There is a maximum character limit of 127. Here are a few hints:
// 
// There are a lot of handy built-in Array methods in Javascript that you may have never heard of even after completing a basic course in 
// Javascript (e.g. those provided by Codecademy) - well, at least I haven't heard of until quite recently. You may also want to research any new 
// built-in methods offered by ES6, the newest specification of Javascript at the time of writing.
// 
// Don't you think the array parameter is a bit wordy? ;)
// 
// Good luck! :D
// -----------------------------------------------------------

const squaresOnly = (y) => y.filter((x) => Math.sqrt(x) % 1 == 0);

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