// -----------------------------------------------------------
// You have to define a function to calculate the division of two factorial numbers. This can be useful for large numbers.
// 
// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 
// 5! = 5 * 4 * 3 * 2 * 1 = 120.
// 
// Some hints: We can see that (n + 1)! = (n + 1) * n!. So (n + 1)! / n! = (n + 1)
// 
// We know that 0! = 1 (because n! = (n + 1)! / (n + 1) therefore 0! = 1! / 1 = 1)
// 
// And your solution should be able to calculate n! / d!.
// 
// *** Please, don't worry about the parameters. You will only receive positive integers, and the first one will be greater than the second one
// -----------------------------------------------------------

// - n and d will be positive BigInts, and also n > d. No need to check any of that
function factorialDivision(n, d){
    var answer = 1n;
    for (let i = n; i > d; i--){
        answer *= i;
    }
    return answer;
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