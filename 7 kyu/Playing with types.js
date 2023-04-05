// -----------------------------------------------------------
// JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but 
// sometimes it's useful to know it.
// 
// You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.
// 
// For example:
// 
// typing(2);            //returns "number=2"
// typing(true);         //returns "boolean=true"
// typing("test");       //returns "string="test""
// typing([1,2,3]);      //returns "object=[1,2,3]"
// typing({a:1,b:2});    //returns "object={"a":1,"b":2}"
// typing(function(){}); //returns "function=function (){}"
// typing(undefined);    //returns "undefined"
// -----------------------------------------------------------

function typing(param){
	if (param === null || param === undefined){
		return String(param);
	}
	var paramType = typeof(param);
	switch(paramType){
		case "function":
			var paramValue = String(param);
			break;
		default : 
			var paramValue = JSON.stringify(param);
	}
	return `${paramType}=${paramValue}`;
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