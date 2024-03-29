// -----------------------------------------------------------
// Array.prototype.length will give you the number of top-level elements in an array.
// 
// Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.
// 
// For example:
// 
// deepCount([1, 2, 3]);  
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);  
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);  
// //>>>>> 7
// 
// The input will always be an array.
// -----------------------------------------------------------

function deepCount(a){
    var arr = [...a], answer = 0;
    while (arr.length){
        let b = arr.pop();
        answer += 1;
        if (Array.isArray(b)){
            arr.push(...b);
        }
    }
    return answer;
}

// or

function deepCount(a){
    var answer = a.length;
    for (let i of a){
        if (Array.isArray(i)){
            answer += deepCount(i);
        }
    }
    return answer;
}

// or

function deepCount(a){
    return a.reduce((b, c) => b + (Array.isArray(c) ? deepCount(c) : 0), a.length);
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