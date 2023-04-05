// -----------------------------------------------------------
// In this kata you will have to write a function that takes litres and price_per_litre (in dollar) as arguments.
// 
// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two 
// litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 
// decimal places. Also you can guess that there will not be negative or non-numeric inputs.
// 
// Good Luck!
// 
// Note
// 1 Dollar = 100 Cents
// -----------------------------------------------------------

function fuelPrice(litres, pricePerLitre) {
	if (litres >= 10){
		var newPrice = pricePerLitre - 0.25;
		return +(litres * newPrice).toFixed(2);
	} else {
		newPrice = pricePerLitre - Math.trunc(litres / 2) * 0.05;
		return +(litres * newPrice).toFixed(2);
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