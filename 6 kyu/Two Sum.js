// -----------------------------------------------------------
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when 
// added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: 
// (index1, index2).
// 
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// 
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of 
// two different items from that array).
// 
// Based on: http://oj.leetcode.com/problems/two-sum/
// 
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// -----------------------------------------------------------

const twoSum = (num, target) => {
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] == target){
                return [i, j];
            }
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