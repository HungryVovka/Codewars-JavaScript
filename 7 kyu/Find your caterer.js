// -----------------------------------------------------------
// You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a basic buffet which costs $15 per 
// person. The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person. The third one gives a 
// 20% discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.
// 
// The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three caterers as per the above 
// criteria. Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.
// 
// Number of orders is always equal to number of people.
// 
// For example,
// 
// budget, people => (200, 9) will return 2.
// 
// budget, people => (300, 9) will return 3 and so on.
// 
// Goodluck :)
// -----------------------------------------------------------

function findCaterer(budget, people){
	if (budget < 15 || people < 1){
		return -1;
	}
	if (people > 60){
		if (people * (30 * 0.8) <= budget){
			return 3;
		}
	} else {
		if (people * 30 <= budget){
			return 3;
		}
	}
	if (people * 20 <= budget){
		return 2;
	}
	if (people * 15 <= budget){
		return 1;
	}
	return -1;
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