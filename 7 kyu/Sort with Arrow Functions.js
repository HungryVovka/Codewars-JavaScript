// -----------------------------------------------------------
// Order People by age Using Arrow Function
// Sort and Order people by their age using Arrow Functions
// 
// Task
// Your task is to order a list containg people objects by age using the new Javascript Arrow Functions
// 
// Input
// Input will be a valid array with People objects containing an Age and Name
// 
// Output
// Output will be a valid sorted array with People objects sorted by Age in ascending order
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// -----------------------------------------------------------

var OrderPeople = function(people){
	return people.sort(({age: a}, {age: b}) => a - b);
}

// or

var OrderPeople = function(people){
	return people.sort((a, b) => a.age - b.age);
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