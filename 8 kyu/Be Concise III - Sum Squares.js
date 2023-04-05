// -----------------------------------------------------------
// Be Concise III - Sum Squares
// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:
// 
// sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
// sumSquares([7,3,9,6,5]) === 200
// sumSquares([11,13,15,18,2]) === 843
// 
// Shorten the code such that it meets the requirements.
// 
// A few hints:
// 
// Try researching about built-in Array methods; they may help shorten your code a lot
// 
// Good luck!
// -----------------------------------------------------------

const sumSquares = (y) => y.reduce((x1, x2) => x1 + x2**2, 0);

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