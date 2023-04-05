// -----------------------------------------------------------
// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.
// 
// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.
// 
// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// 
// The first array will always have at least one element.
// -----------------------------------------------------------

function findMissing(arr1, arr2) {
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] != arr2[i]){ 
            return arr1[i];
        }
    }
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