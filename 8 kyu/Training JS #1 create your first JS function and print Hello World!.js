// -----------------------------------------------------------
// In JavaScript, your code is running in a function, let us step by step complete your first JS function.
// 
// Look at this example:
// 
//       --------keyword "function"
//       |       ----your function name  
//       |       |    ---if needed, some arguments will appear in brackets
//       |       |    |
//     function myfunc(){  ---------your function code will starting with "{"
//       //you should type your code here
//     }----------------------------ending with "}"
// 
// If we want to print some to the screen, maybe we can use Document.write() in the web, or use alert() pop your message, but Codewars did not 
// support these methods, we should use console.log() in your function. see this example:
// 
// function printWordToScreen(){
//   var somewords="This is an example."
//   console.log(somewords)
// }
// 
// If we run this function, This is an example. will be seen on the screen. As you see, console.log() is an useful method help your work, you will 
// become more and more like it.
// 
// Task
// Please refer to two example above and write your first JS function.
// 
// mission 1:
// 
// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})
// 
// mission 2:
// 
// use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).
// 
// mission 3:
// 
// type the console.log() in the next line(don't forget to put the str in the brackets).
// 
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// 
// In the end, click "Submit" to submit your code pass this kata.
// -----------------------------------------------------------

function helloWorld (){
	var str = "Hello World!";
	console.log(str);
}

// or

const helloWorld = hi => {
	let str = "Hello World!";
	console.log(str);
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