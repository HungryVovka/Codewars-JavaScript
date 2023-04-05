// -----------------------------------------------------------
// You probably know about Function.prototype.bind method in JavaScript. It returns a copy of the original function but this function will always be 
// called in the specified context. The problem is that you can't rebind another context any more.
// 
// var func = function () {
//   return this.prop;
// };
// var obj1 = {prop: 1},
//     obj2 = {prop: 2};
//     
// func = func.bind(obj1);
// func(); // Will produce 1
// 
// func = func.bind(obj2);
// func(); // Will also produce 1 :(
// 
// Your task is override the native Function.prototype.bind method by a new one that will allow you to rebind context multiple times. In this kata you 
// don't need to worry about currying, testing function will never get params.
// -----------------------------------------------------------

Function.prototype.bind = function (ctx) {
    var a = this;
    return function(...args){
        var b = this == global ? ctx : this;
        return a.apply(b, args);
    }
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