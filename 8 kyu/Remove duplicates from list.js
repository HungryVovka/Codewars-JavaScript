// -----------------------------------------------------------
// Define a function that removes duplicates from an array of numbers and returns it as a result.
// 
// The order of the sequence has to stay the same.
// -----------------------------------------------------------

function distinct(seq) {
	var newseq = [];
	seq.forEach(i => {
		if (!newseq.includes(i)){
			newseq.push(i);
		}
	});
	return newseq;
}

// or

function distinct(seq) {
	return seq.filter((a, b) => seq.indexOf(a) == seq.indexOf(a, b));
}

// or

function distinct(seq) {
	return [...new Set(seq)];
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