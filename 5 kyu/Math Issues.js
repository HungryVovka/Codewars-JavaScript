// -----------------------------------------------------------
// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are 
// passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
// 
// Here is a list of functions, we need:
// 
// Math.round()
// Math.ceil()
// Math.floor()
// -----------------------------------------------------------

Math.floor = function(n){
    return parseInt(n);
};

Math.round = function(n){
    return Math.floor(n + 0.5);
};

Math.ceil = function(n){
    return !Number.isInteger(n) ? Math.floor(n) + 1 : n; 
};

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