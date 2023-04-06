// -----------------------------------------------------------
// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more 
// than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.
// 
// When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, 
// None in Python.
// 
// nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
// nextItem("testing", "t") # "e"
// -----------------------------------------------------------

function nextItem(xs, item) {
	var nexti = false;
	for (let i of xs){
		if (nexti) return i;
		if (i == item) nexti = true;
	}
	return undefined;
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