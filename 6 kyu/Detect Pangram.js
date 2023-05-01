// -----------------------------------------------------------
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over 
// the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// 
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
// -----------------------------------------------------------

function isPangram(sentence){
	let engAlphabet = "ABCDEFJHIJKLMNOPQRSTUVWXYZ";
	sentence = sentence.toUpperCase();
	for (let i of engAlphabet){
		if (sentence.indexOf(i) == -1){
			return false;
		}
	}
	return true;
}

// or

function isPangram(sentence){
	let letters = sentence.toUpperCase().match(/[A-Z]/g);
	let engAlphabet = [...new Set(letters)];
	return engAlphabet.length == 26;
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