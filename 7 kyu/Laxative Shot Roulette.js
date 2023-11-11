// -----------------------------------------------------------
// Description
// Peter enjoys taking risks, and this time he has decided to take it up a notch!
// 
// Peter asks his local barman to pour him n shots, after which Peter then puts laxatives in x of them. He then turns around and lets the barman shuffle 
// the shots. Peter approaches the shots and drinks a of them one at a time. Just one shot is enough to give Peter a runny tummy. What is the 
// probability that Peter doesn't need to run to the loo?
// 
// Task
// You are given:
// 
// n - The total number of shots.
// 
// x - The number of laxative laden shots.
// 
// a - The number of shots that peter drinks.
// 
// return the probability that Peter won't have the trots after drinking. n will always be greater than x, and a will always be less than n.
// 
// You must return the probability rounded to two decimal places i.e. 0.05 or 0.81
// -----------------------------------------------------------

function getChance(n, x, a){
	let chance = 1.00;
	for (let i = 0; i < a; i++){
		chance *= (n - x) / n;
		n--;
	}
	return Number(chance.toFixed(2));
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