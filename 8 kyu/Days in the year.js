// -----------------------------------------------------------
// A variation of determining leap years, assuming only integers are used and years can be negative and positive.
// 
// Write a function which will return the days in the year and the year entered in a string. For example:
// 
// yearDays(2000) returns "2000 has 366 days"
// 
// There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.
// 
// Also the basic rule for validating a leap year are as follows
// 
// Most years that can be divided evenly by 4 are leap years.
// 
// Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.
// 
// So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.
// -----------------------------------------------------------

function yearDays(year){
	var daysInYear = 365;
	if (year % 400 == 0 || (year % 4 == 0 && year % 100)){
		daysInYear = 366;
	}
	return `${year} has ${daysInYear} days`;
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