// -----------------------------------------------------------
// VVhat ?!?
// 
// None of zese codevarriors seemz to remember hiz ovvn name !
// 
// Kould you help ?
// 
// var albert = new Warrior("Al")
// var boris  = new Warrior("Boris")
// 
// albert.toString() --> "Hi! my name's Boris" <-- ohoh..
// -----------------------------------------------------------

function Warrior(n){
	var name = n;  
	this.name = function(n){
		if (n) name = n;
		return name;
	}
}
	
Warrior.prototype.toString = function(){
	return "Hi! my name's " + this.name();
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