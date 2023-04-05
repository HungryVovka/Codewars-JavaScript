// -----------------------------------------------------------
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
// 
// Our deck (is preloaded):
// 
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
// -----------------------------------------------------------

function defineSuit(card) {
	var c = {
		"♣": "clubs",
		"♦": "diamonds",
		"♥": "hearts",
		"♠": "spades"
	}
	return c[card.charAt(card.length - 1)];
}

// or

function defineSuit(card) {
	if(card.includes("♣")){
		return "clubs";
	}
	if(card.includes("♦")){
		return "diamonds";
	}
	if(card.includes("♥")){
		return "hearts";
	}
	if(card.includes("♠")){
		return "spades";
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