// -----------------------------------------------------------
// Implement the method find which takes in an two parameters object and path. The path will be a period-delimited string of properties that we 
// will use to traverse through our object to find our target value.
// 
// Check out this Codecast to get started! https://codecast.qualified.io/interaction/594197b92f524d001c1ab790
// 
// Edge Cases And Further Consideration
// Be sure to handle passing array indices. For example, if we have an object: { people: ['John', 'Dave', 'Lisa'] } and the path is 
// 'people.1', the target value is 'Dave' which is the string at position 1 inside of the people array.
// 
// Also this method should handle invalid paths. If we have an object { user: { name: 'Dan' } } and the path is 'user.wallet.money', we 
// should return undefined. Valid paths are exclusive to properties on the object which are not inherited, in other words it is specific to this object 
// and does not need to look up the prototype chain.
// -----------------------------------------------------------

function find(object, path) {
    var arr = path.split(".");
    for (var i of arr){
        if (object.hasOwnProperty(i)){
            object = object[i];
        } else {
            object = undefined;
            break;
        }
    }
    return object;
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