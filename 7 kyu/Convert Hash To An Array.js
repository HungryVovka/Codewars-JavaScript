// -----------------------------------------------------------
// Convert a hash into an array. Nothing more, Nothing less.
// 
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// 
// should be converted into
// 
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// 
// Note: The output array should be sorted alphabetically by key name.
// 
// Good Luck!
// -----------------------------------------------------------

function convertHashToArray(hash){
    var answer = [];
    for (let h in hash){
        answer.push([h, hash[h]]);
    }
    return answer.sort();
}

// or

function convertHashToArray(hash){
    return Object.entries(hash).sort();
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