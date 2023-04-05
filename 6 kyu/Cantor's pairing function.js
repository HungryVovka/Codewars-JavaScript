// -----------------------------------------------------------
// Georg Cantor's in one of his proofs used following sequence:
// 
// 1/1 1/2 1/3 1/4 1/5 ... 
// 2/1 2/2 2/3 2/4 ...
// 3/1 3/2 3/3 ... 
// 4/1 4/2 ... 
// 5/1 ... 
// 
// There are many ways to order those expressions. In this kata we'll use Cantor pairing function.
// 
// So sequence is:
// 
// 1/1, 1/2, 2/1, 3/1, 2/2, 1/3, 1/4 ...
// Your task is to return nth element of this sequence.
// 
// Input: n - positive integer (max 268435455)
// 
// Output: string - nth expression of sequence - 'a/b' where a and b are integers.
// -----------------------------------------------------------

function cantor(n){
    let a = Math.ceil(0.5 * (Math.sqrt(8 * n + 1) - 1))
    let b = a * (1 - a) / 2 + n 
    return (a + 1) % 2 == 1 ? b + "/" + (a - b + 1) : (a - b + 1) + "/" + b;
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