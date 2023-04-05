// -----------------------------------------------------------
// My roommate and I occasionally make wagers on if we can beat each other in Super Smash Bros. Being the competitor I am, I can't take a loss 
// without getting a chance at redemption. Often times, this manifests in the form of a "Double or nothing" bet. Rather than paying up, the wager will 
// instead be doubled, and an additional round will be played.
// 
// ...This consistently results in me losing more money than I initially wagered.
// 
// Given the amount of cash on hand, the initial wager, and the number of rounds played, return the amount of money that I'll have left after our 
// gam(bl)ing session has concluded.
// 
// If I can't afford to pay up, return "I'll pay you back later" instead ;)
// -----------------------------------------------------------

function doubleOrNothing(cash, wager, losses){
	cash -= 2**(losses - 1) * wager;
	return cash >= 0 ? cash : "I'll pay you back later";
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