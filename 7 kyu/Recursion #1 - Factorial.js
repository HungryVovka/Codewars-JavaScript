// -----------------------------------------------------------
// Do you know recursion?
// 
// This is a kata series that you can only solve using recursion.
// ##1 - Factorial
// 
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For 
// example,
// 
// 5! = 5 * 4 * 3 * 2 * 1 = 120.
// 
// The value of 0! is 1.
// 
// #Your task
// 
// You have to create the function factorial that receives n and returns n!. You have to use recursion.
// -----------------------------------------------------------

function factorial(n){
	return n > 1 ? factorial(n - 1) * n : 1;
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