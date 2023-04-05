// -----------------------------------------------------------
// Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method 
// has been disabled for you so that you are forced to create your own.
// 
// Example:
// 
// sort([1,3,2]) // should return [1,2,3]
// -----------------------------------------------------------

function sort(items){
    let condition = items.length - 1;
    for (let i = 0; i < condition; i++){
        for (let j = 0; j < condition; j++){
            if (items[j] > items[j + 1]){
                let picking = items[j];
                items[j] = items[j + 1];
                items[j + 1] = picking;
            }
        }
    }
    return items;
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