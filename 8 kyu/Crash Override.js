// -----------------------------------------------------------
// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film 
// Hackers.
// 
// Your task is to create a function that, given a proper first and last name, will return the correct alias.
// 
// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already 
// given.
// 
// If the first character of either of the names given to the function is not a letter from A - Z, you should return 
// "Your name must start with a letter from A - Z."
// 
// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
// 
// Examples
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}
// 
// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
// 
// Happy hacking!
// -----------------------------------------------------------

function aliasGen(fName, lName){
	let f = firstName[fName[0].toUpperCase()];
	let l = surname[lName[0].toUpperCase()];
	return f && l ? `${f} ${l}` : "Your name must start with a letter from A - Z.";
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