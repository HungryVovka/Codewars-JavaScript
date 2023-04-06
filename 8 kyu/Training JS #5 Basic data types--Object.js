// -----------------------------------------------------------
// In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}
// 
// You can define the object attributes during initialization, like this:
// 
// var animal={name:"dog"}
// 
// you can also set/get some properties after the object definition, like this:
// 
// var animal={}
// animal.name="dog"  (or animal["name"]="dog")
// 
// Task
// Give you a function animal, accept 1 parameter:obj like this:
// 
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
// 
// "This white dog has 4 legs."
// 
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// 
// In the end, click "Submit" to submit your code pass this kata.
// -----------------------------------------------------------

function animal(obj){
	return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
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