// -----------------------------------------------------------
// Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.
// 
// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
// 
// Make sure to round off the result to two decimal points.
// 
// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
// -----------------------------------------------------------

function converter (mpg) {
	var gallon = 4.54609188;
	var mile = 1.609344;
	let x = mpg * mile / gallon;
	return Number(x.toFixed(2));
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