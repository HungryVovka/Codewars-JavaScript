// -----------------------------------------------------------
// We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last 
// names and saves the value in "name" property.
// 
// We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is 
// not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available
// 
// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }
// 
// var n = new NameMe('John', 'Doe');
// n.firstName //Expected: John
// n.lastName //Expected: Doe
// n.name //Expected: John Doe
// -----------------------------------------------------------

function NameMe(first, last){
	this.firstName = first;
	this.lastName = last;
	this.name = first + " " + last;
	if (!first || !last) throw TypeError("No name info");
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