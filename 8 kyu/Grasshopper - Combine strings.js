// -----------------------------------------------------------
// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
// 
// Example:
// 
// combineNames('James', 'Stevens')
// 
// returns:
// 
// 'James Stevens'
// -----------------------------------------------------------

const combineNames = (first, second) => first + " " + second;

// or

const combineNames = (...args) => args.join(" ");

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