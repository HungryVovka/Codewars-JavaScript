// -----------------------------------------------------------
// The new operator in JavaScript creates objects by following these three steps:
// 
// 1. First, it creates a new empty object. (Already done for you here.)
// 2. Next, it sets the new object’s `.__proto__` property to match the prototype property of the function being invoked.
// 3. Finally, the operator invokes the function and passes the new object as the “this” reference.
// 
// Use this understanding of the new operator to create an instance of the object MyObject, but do so without calling "new MyObject()".
// 
// Note: Currently there is no way to prevent you from passing this kata just by typing "var myObj = new MyObject();". However, I will scrunch my 
// eyebrows when I see your solution and make quiet remarks to myself about how you don't understand what this kata is trying to teach you.
// -----------------------------------------------------------

// Implement the functionality of the 'new' operator as if you had the code:
// var myObj = new MyObject();
// but do not use the 'new' operator.
//
// Start with a simple empty Object literal.

var myObj = {};

myObj.__proto__ = MyObject.prototype;

MyObject.apply(myObj, {});

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