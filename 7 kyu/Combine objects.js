// -----------------------------------------------------------
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// 
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
// 
// An example:
// 
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// 
// The combine function should be a good citizen, so should not mutate the input objects.
// -----------------------------------------------------------

function combine(){
    let combineObj = {};
    let arr = [...arguments];
    for(let i = 0; i < arguments.length; i++){
        for(let j in arguments[i]){
            if (!combineObj[j]){
                combineObj[j] = arguments[i][j];
            } else {
                combineObj[j] = combineObj[j] + arguments[i][j];
            }
        }
    }
    return combineObj;
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