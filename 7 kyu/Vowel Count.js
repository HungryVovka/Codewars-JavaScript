// -----------------------------------------------------------
// Return the number (count) of vowels in the given string.
// 
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// 
// The input string will only consist of lower case letters and/or spaces.
// -----------------------------------------------------------

function getCount(str){
	let vovels = ["a", "e", "i", "o", "u"];
	let answer = 0;
	str = str.split("")
	for (let i = 0; i < str.length; i++){
		if (vovels.includes(str[i].toLowerCase())) answer ++;
	}
	return answer;
}

// or

function getCount(str){
	str = str.split("");
	return str.filter(i => "aeiouAEIOU".includes(i)).length;
}

// or

function getCount(str){
	return (str.match(/[aeiouAEIOU]/g) || []).length;
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