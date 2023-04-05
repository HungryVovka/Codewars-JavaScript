// -----------------------------------------------------------
// We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton 
// numbers, and 123 and 9980 are not.
// 
// For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger 
// than n.
// 
// Examples:
// doubleton(120) === 121
// doubleton(1234) === 1311
// doubleton(10) === 12
// -----------------------------------------------------------

function doubleton(num){
    while (true){
        num += 1;
        if (new Set(String(num)).size == 2){
            return num;
        }
    }
}

// or

function doubleton(num){
    let x = num + 1;
    while (new Set(String(x)).size != 2){
        x += 1;
    }
    return x;
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