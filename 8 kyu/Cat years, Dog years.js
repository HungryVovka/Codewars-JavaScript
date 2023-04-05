// -----------------------------------------------------------
// Kata Task
// I have a cat and a dog.
// 
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// 
// Return their respective ages now as [humanYears,catYears,dogYears]
// 
// NOTES:
// 
// humanYears >= 1
// humanYears are whole numbers only
// 
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// 
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// 
// References
// 
// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
// -----------------------------------------------------------

var humanYearsCatYearsDogYears = function(humanYears) {
	let catYears1 = 15;
	let catYears2 = catYears1 + 9;
	let catYears3 = catYears2 + (humanYears - 2) * 4;
	let dogYears1 = 15;
	let dogYears2 = dogYears1 + 9;
	let dogYears3 = dogYears2 + (humanYears - 2) * 5;
	if (humanYears == 0){
		return [0, 0, 0];
	}
	if (humanYears == 1){
		return [humanYears, catYears1, dogYears1];
	}
	if (humanYears == 2){
		return [humanYears, catYears2, dogYears2];
	}
	if (humanYears > 2){
		return [humanYears, catYears3, dogYears3];
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