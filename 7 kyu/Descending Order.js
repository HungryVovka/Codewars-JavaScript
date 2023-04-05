// -----------------------------------------------------------
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, 
// rearrange the digits to create the highest possible number.
// 
// Examples:
// Input: 42145 Output: 54421
// 
// Input: 145263 Output: 654321
// 
// Input: 123456789 Output: 987654321
// -----------------------------------------------------------

function descendingOrder(n){
    let new_n = n.toString().split('').sort().reverse().join('');
    let output = Number(new_n);
    return output;
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