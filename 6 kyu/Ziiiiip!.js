// -----------------------------------------------------------
// Let's implement the zipObject function that enables such results
// 
// zipObject(['fred', 'barney'], [30, 40])
// => { 'fred': 30, 'barney': 40 }
// 
// zipObject([['fred', 30], ['barney', 40]])
// => { 'fred': 30, 'barney': 40 }
// 
// The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, 
// value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.
// 
// If only keys are given, then set the values to undefined.
// 
// zipObject(['fred', 'barney'])
// { fred: undefined, barney: undefined }
// 
// If neither keys nor values are specified, then return {}
// 
// zipObject()
// {}
// -----------------------------------------------------------

function zipObject(keys, values){
    let ziiiiip = {};
    for (let i = 0; i < keys.length; i++){
        if (values != undefined){
            ziiiiip[keys[i]] = values[i];
        } else {
            ziiiiip[keys[i][0]] = keys[i][1] != 0 ? 
                keys[i][1] || undefined : +0;
        }
    }
    return ziiiiip;
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