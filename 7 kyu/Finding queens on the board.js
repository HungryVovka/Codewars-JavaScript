// -----------------------------------------------------------
// Your task is to find the maximum number of queens that can be put on the board so that there would be one single unbeaten square (ie. threatened 
// by no queen on the board).
// 
// The Queen can move any distance vertically, horizontally and diagonally.
// 
// Input
// The queens(n) function takes the size of the chessboard.
// 
// n € Z, so it can be negative, and values can go up to 141^1000.
// 
// Output
// The maximum number of queens to leave one single unbeaten square
// Return 0 if n is negative.
// 
// Examples
// n = 4 -> 6 queens
// n = 5 -> 12 queens
//
// Good luck )
// -----------------------------------------------------------

// the input and output values are in BigInt type
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
function queens(n){
	return n < 3n ? 0n : BigInt((n - 2n) * (n - 1n));
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