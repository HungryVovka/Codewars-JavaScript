// -----------------------------------------------------------
// Ahoy matey!
// 
// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a 
// heavy booty on board.
// 
// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?
// 
// You begin with writing a generic Ship class / struct:
// 
// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// 
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:
// 
// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// 
// var titanic = new Ship(15, 10);
// 
// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is 
// considered worthy to loot. Any ship weighing that much must have a lot of booty!
// 
// Add the method
// 
// isWorthIt
// 
// to decide if the ship is worthy to loot. For example:
// 
// titanic.isWorthIt() // return false
// 
// This Kata teaches you the very basic of method creation.
// 
// Good luck!
// -----------------------------------------------------------

class Ship{
	constructor(draft, crew){
		this.draft = draft;
		this.crew = crew;
	}
	
	isWorthIt(){
		return this.draft - this.crew * 1.5 > 20;
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