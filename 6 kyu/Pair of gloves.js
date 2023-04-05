// -----------------------------------------------------------
// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from 
// the gloves you have in your drawer.
// 
// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can 
// form pairs.
// 
// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)
// 
// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)
// -----------------------------------------------------------

function numberOfPairs(gloves){
    var glov =  gloves.reduce((a, b) => {
        a[b] =(a[b] || 0) + 1;
        return a;
    }, {});
    let pair = 0;
    for (let j in glov){
        pair += Math.floor(glov[j] / 2);
    }
    return pair;
}

// or

function numberOfPairs(gloves) {
    var pair = 0, glov = {};
    for (let i of gloves){
        if (!glov.hasOwnProperty(i)){
            glov[i] = 0;
        }
        if (++glov[i] == 2){
            glov[i] -= 2;
            pair += 1;
        }
    }
    return pair;
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