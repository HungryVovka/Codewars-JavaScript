// -----------------------------------------------------------
// Given an array of integers your solution should find the smallest integer.
// 
// For example:
// 
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// 
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
// -----------------------------------------------------------

class SmallestIntegerFinder {
	findSmallestInt(args) {
		args.sort((a, b) => a - b);
		return args[0];
	}
}

// or

class SmallestIntegerFinder {
	findSmallestInt(args) {
		return Math.min(...args);
	}
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