// -----------------------------------------------------------
// My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given 
// a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) 
// to clean.
// 
// For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) 
// amount of water.
// 
// Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of 
// clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.
// 
// My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times 
// the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than 
// load (max_load). If that is the case, return 'Not enough clothes'.
// 
// The answer should be rounded to the nearest 2 decimal places.
// -----------------------------------------------------------

function howMuchWater(water, load, clothes){
	if ((clothes / load) > 2){
		return ('Too much clothes');
	} else if (clothes < load){
		return ('Not enough clothes');
	} else {
		return +(water * 1.1 **(clothes - load)).toFixed(2);
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