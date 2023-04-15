// -----------------------------------------------------------
// Given an object with an arbitrary number of properties, any number of which may be objects or arrays, replace all values which are strictly equal to 
// the string: "dynamic" with a given string occurring anywhere in that object or a child object or array.
// 
// Your solution should be recursive.
// 
// Your solution should be "in place" meaning it return the original object, not a copy.
// 
// Your solution should also include some type safety. If a value that isn't an object or array is passed as the first argument, it should just return 
// whatever was passed in.
// -----------------------------------------------------------

function solution (data, replace){
	if (data === "dynamic"){
		return replace;
	} else if (typeof data !== "object" || data === null){
		return data;
	} else {
		for (let i in data){
			data[i] = solution(data[i], replace);
		}
	}
	return data;
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