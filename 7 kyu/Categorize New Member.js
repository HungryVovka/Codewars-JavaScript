// -----------------------------------------------------------
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that 
// will tell prospective members which category they will be placed.
// 
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the 
// better the player the lower the handicap.
// 
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's 
// age and an integer for the person's handicap.
// 
// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior 
// or open category.
// 
// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
// -----------------------------------------------------------

function openOrSenior(data){
    var arr = [];
    var a = 'Open', b = 'Senior';
    for (var i = 0; i < data.length; i++){
        if (data[i][0] >= 55 && data[i][1] > 7){
            arr.push(b);
        } else {
            arr.push(a);
        }
    }
    return arr;
}

// or

function openOrSenior(data){
    var arr = [];
    for (var i = 0; i < data.length; i++){
        arr[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open';
    }
    return arr;
}

// or

function openOrSenior(data){
    return data.map(([a, b]) => (a > 54 && b > 7) ? 'Senior' : 'Open');
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