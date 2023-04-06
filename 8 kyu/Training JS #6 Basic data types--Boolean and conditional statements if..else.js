// -----------------------------------------------------------
// In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of 
// such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, || or some bitwise 
// operators:&, |, !, ^
// 
// Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, 
// the Boolean value is mainly used for conditional judgment. Look this example:
// 
// var arr=[];
// ...
// ...
// ......
// if (arr.length) return "arr has elements";
// else            return "arr is empty";
// 
// You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. it 
// means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.
// 
// These values are converted to false in the conditional statement:
// 
// 0, -0, "", null, undefined, NaN
// 
// Task
// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or 
// it can convert to false), should return a string "false", if not, return a string "true".
// 
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// 
// In the end, click "Submit" to submit your code pass this kata.
// -----------------------------------------------------------

function trueOrFalse(val){
	return `` + Boolean(val);
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