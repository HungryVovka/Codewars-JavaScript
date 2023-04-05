// -----------------------------------------------------------
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
// 
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
// 
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
// 
// Return value as boolean values, true for the string to contains "English", false for it does not.
// -----------------------------------------------------------

function spEng(sentence){
	return sentence.toLowerCase().includes("english");
}

// or

function spEng(sentence){
	return /english/i.test(sentence);
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