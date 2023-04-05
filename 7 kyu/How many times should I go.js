// -----------------------------------------------------------
// Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimitted acces to the museum.
// 
// In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. The function take 2 
// arguments annual_price and individual_price.
// -----------------------------------------------------------

function howManyTimes(annualPrice, individualPrice) {
	var n = 1;
	var ticket = individualPrice;
	while (ticket < annualPrice){
		ticket += individualPrice;
		n = n + 1;
	}
	return(n)
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