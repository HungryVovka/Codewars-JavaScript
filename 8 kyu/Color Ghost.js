// -----------------------------------------------------------
// Color Ghost
// Create a class Ghost
// 
// Ghost objects are instantiated without any arguments.
// 
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
// 
// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"
// -----------------------------------------------------------

class Ghost {
	constructor(){
		this.colorGhost = ["purple", "red", "white", "yellow"];
	}
	
	get color(){
		return this.colorGhost[Math.trunc(Math.random() * this.colorGhost.length)];
	}
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