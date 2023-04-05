// -----------------------------------------------------------
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// 
// Find the number of Friday 13th in the given year.
// 
// Input: Year in Gregorian calendar as integer.
// 
// Output: Number of Black Fridays in the year as an integer.
// 
// Examples:
// 
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1
// -----------------------------------------------------------

function unluckyDays(year){
	var friday13 = 0;
	for (var month = 0; month < 12; month++){
		if (new Date(year, month, 13).getDay() == 5){
			friday13 += 1;
		}
	}
	return friday13;
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