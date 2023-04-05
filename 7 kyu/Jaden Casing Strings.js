// -----------------------------------------------------------
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his 
// philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to 
// capitalize each word, check out how contractions are expected to be in the example below. (https://twitter.com/jaden)
// 
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not 
// capitalized in the same way he originally typed them.
// 
// Example:
// 
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// 
// Link to Jaden's former Twitter account @officialjaden via archive.org 
// (https://web.archive.org/web/20190624190255/ https://twitter.com/officialjaden)
// -----------------------------------------------------------

function capWords(str){ 
	var words = str.split(" "); 
	for (var i=0 ; i < words.length ; i++){ 
		var testwd = words[i]; 
		var firLet = testwd.substr(0,1); 
		var rest = testwd.substr(1, testwd.length -1); 
		words[i] = firLet.toUpperCase() + rest;
	}
  return words.join(" ");
}

String.prototype.toJadenCase = function () {
  return capWords(this);
};

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