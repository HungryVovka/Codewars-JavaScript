// -----------------------------------------------------------
// In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..
// 
// Numbers can use operators such as + - * / %
// 
// Task
// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local 
// variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the 
// function equal1 is completed, please refer to this example to complete the following functions.
// 
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// 
// In the end, click "Submit" to submit your code pass this kata.
// -----------------------------------------------------------

let v1 = 50,
	v2 = 100,
	v3 = 150,
	v4 = 200,
	v5 = 2,
	v6 = 250;

function equal1(){
	let a = v1,   
			b = v1;   
	return a + b;
}

function equal2(){
	let a = v3, 
			b = v1; 
	return a - b;
}

function equal3(){
	let a = v1, 
			b = v5;
	return a * b;
}

function equal4(){
	let a = v4,
			b = v5;
	return a / b;
}

function equal5(){
	let a = v2,
			b = v6;
	return a % b;
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