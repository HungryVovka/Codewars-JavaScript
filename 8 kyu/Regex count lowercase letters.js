// -----------------------------------------------------------
// Your task is simply to count the total number of lowercase letters in a string.
// 
// Examples
// lowercaseCount("abc"); ===> 3
// 
// lowercaseCount("abcABC123"); ===> 3
// 
// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
// 
// lowercaseCount(""); ===> 0;
// 
// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
// 
// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
// -----------------------------------------------------------

function lowercaseCount(strng){
	return (strng.match(/[a-z]/g) || []).length;
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