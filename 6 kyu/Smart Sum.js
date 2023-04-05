// -----------------------------------------------------------
// Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be 
// arrays of numbers or nested arrays.
// 
// smartSum(1,2,3,[4,5],6); // returns 21
// smartSum(1,2,[[3,4],5],6); // returns 21
// -----------------------------------------------------------

function smartSum(){
    let answer = 0;
    for (let a = 0; a < arguments.length; a++){
        if (typeof arguments[a] == "number"){
            answer += arguments[a];
        } else {
            for (let b = 0; b < arguments[a].length; b++){
                answer += smartSum(arguments[a][b]);
            }
        }
    }
    return answer;
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