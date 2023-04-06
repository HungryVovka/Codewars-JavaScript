// -----------------------------------------------------------
// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of 
// the longest word, as a number.
// 
// There will only be one 'longest' word.
// -----------------------------------------------------------

function findLongest(str){
	var spl = str.split(" ");
	var longest = 0;
	for (var i = 0; i < spl.length; i++){
		if (spl[i].length > longest){
		longest = spl[i].length;
	}
}
		return longest;
}

// or

function findLongest(str){
	return Math.max(...str.split(" ").map(bug => bug.length))
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