// -----------------------------------------------------------
// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all 
// letters from the input in all possible orders.
// 
// Examples:
// 
// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// 
// The order of the permutations doesn't matter.
// -----------------------------------------------------------

function permutations(str = ""){
    if (!!str.length && str.length < 2){
        return [str];
    }
    var arr = [];
    for (let i = 0; i < str.length; i++){
        let char = str[i];
        if (str.indexOf(char) != i){
            continue;
        }
        let remainder = str.slice(0, i) + str.slice(i + 1, str.length);
        for (let permutation of permutations(remainder)){
            arr.push(char + permutation);
        }
    }
    return arr;
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