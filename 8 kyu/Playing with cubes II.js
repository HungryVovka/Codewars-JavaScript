// ---------------------------------------------------------
// Hey Codewarrior!
// 
// You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One 
// taking an integer and one handling no given arguments!
// 
// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!
// 
// The constructor taking no arguments should assign 0 to Cube's Side property.
// ---------------------------------------------------------

class Cube{ 
	constructor(side){
		this.setSide(side);
	}
	
	getSide(){
		`Return the side of the Cube.`
		return this.side;
	}
	
	setSide(side = 0){
		`Set the value of the Cube's side.`
		this.side = Math.abs(side);
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