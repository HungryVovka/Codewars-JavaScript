// -----------------------------------------------------------
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!
// 
// 
// You have to write a method, that return the length of the missing array.
// 
// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
// 
// If the array of arrays is null/nil or empty, the method should return 0.
// 
// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.
// 
// Have fun coding it and please don't forget to vote and rank this kata! :-)
// -----------------------------------------------------------

function getLengthOfMissingArray(arrayOfArrays) {
    var leng = (arrayOfArrays || [])
        .map(i => i ? i.length : 0)
        .sort((a, b) => a - b);
    if (leng.includes(0)){
        return 0;
    }
    for (let j = 0; j < leng.length - 1; j++){
        if (leng[j] + 1 != leng[j + 1]){
            return leng[j] + 1;
        }
    }
    return 0;
}

// or

function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || arrayOfArrays == 0) {
        return 0;
    }
    var leng = arrayOfArrays.map(i => {return i ? i.length : 0});
    if (leng.includes(0)) {
        return 0;
    }
    let j = Math.max(...leng);
    while(leng.includes(j)){
        j -= 1;
    }
    return j;
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