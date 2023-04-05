// -----------------------------------------------------------
// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
// 
// Write a simple function to check if the string contains the word hallo in different languages.
// 
// These are the languages of the possible people you met the night before:
// 
// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// 
// Notes
// 
// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests
// -----------------------------------------------------------

function validateHello(greetings) {
	var greet = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
	greetings = greetings.toLowerCase();
	for (let i = 0; i < greet.length; i++){
		if (greetings.includes(greet[i])){
			return true;
		}
	}
	return false;
}

// or

function validateHello(greetings) {
	return /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);
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