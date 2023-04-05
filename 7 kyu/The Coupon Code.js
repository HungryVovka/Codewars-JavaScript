// -----------------------------------------------------------
// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired 
// coupons.
// 
// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// 
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// 
// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
// -----------------------------------------------------------

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
	return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}

// or

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
	return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
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