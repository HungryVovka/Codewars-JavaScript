// -----------------------------------------------------------
// Consider a sequence u where u is defined as follows:
// 
// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
// 
// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
// 
// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no 
// duplicates).
// 
// Example:
// dbl_linear(10) should return 22
// 
// Note:
// Focus attention on efficiency
// -----------------------------------------------------------

function dblLinear(n) {
    var arr = [1];
    var y = 0;
    var z = 0;
    for(var i = 1; i <= n; i++){
        arr[i] = Math.min(2*arr[y] + 1, 3*arr[z] + 1);
        if (arr[i] == 2*arr[y] + 1){
            y += 1;
        }
        if (arr[i] == 3*arr[z] + 1){
            z += 1;
        }
    }
    return arr[n];
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