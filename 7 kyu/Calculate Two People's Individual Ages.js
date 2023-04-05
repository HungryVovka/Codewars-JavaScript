// -----------------------------------------------------------
// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age 
// first) if those exist or null/None if:
// 
// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative
// -----------------------------------------------------------

var diff = []

function getAges(sum,difference){
    if (sum < 0 || difference < 0){
        return(null);
    } else if (sum >= 0 && difference >= 0){
        var second = (sum - difference) / 2;
        var first = second + difference;
        if (first >= 0 && second >= 0){
            diff[0] = first;
            diff[1] = second;
            return(diff);
        } else {
            return(null);
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