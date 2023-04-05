// -----------------------------------------------------------
// When a function is called by itself it is bound to the global context; the this variable of the function will be bound to the global object.
// 
// When the getNameFunc function is called on the alpha object the value of the name variable outside of the object is returned: "The Window".
// 
// We do not want this, we want the value of the name property inside the alpha object to be returned.
// 
// Fix getNameFunc so the right value is returned.
// 
// For more information: Binding (http://alistapart.com/article/getoutbindingsituations)
// -----------------------------------------------------------

name = "The Window";

var alpha = {
	name : "My Alpha",
	getNameFunc : function(){
		return function(){
			return this.name
		}.bind(this);
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