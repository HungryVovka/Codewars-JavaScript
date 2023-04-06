// -----------------------------------------------------------
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health 
// can't be less than 0.
// -----------------------------------------------------------

function combat(health, damage) {
	if (health < damage){return 0};
	return health - damage;
}

// or

function combat(health, damage) {
	return health < damage ? 0 : health - damage;
}

// or

function combat(health, damage) {
	return Math.max(health - damage, 0);
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