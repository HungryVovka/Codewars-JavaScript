// -----------------------------------------------------------
// You have a square shape of 4x4, you need to find out by what criterion there are cute and not cute patterns in these cases
// 
// According to the given arrangement of tiles, it is required to determine whether the executed pattern is cute. You need to write a function.
// 
// Input data:
// 
// A string value is entered into the function by type "BWBW\nBBWB\nWWBB\nBWWW".
// 
// B - black tile
// 
// W - white tile
// 
// \n - included just for line wrapping
// 
// Output data:
// 
// Return True if the pattern is cute and False otherwise.
// 
// Examples:
// 
// cute_pattern("BWBW\nBBWB\nWWBB\nBWWW") # should return True
// cute_pattern("BBWB\nBBWB\nWWBW\nBBWB") # should return False
// 
// If you want to solve our problems, they are here: From Singularity Hub Community
// 
// I will gladly accept help for other languages in telegram @fimermaker
// -----------------------------------------------------------

function cutePattern(tiles){
	tiles = tiles.split("\n");
	for (let i = 0; i < tiles.length - 1; i++){
		for (let j = 0; j < tiles.length -1; j++){
			let [a, b, c, d] = [
				tiles[i][j],
				tiles[i][j + 1],
				tiles[i + 1][j],
				tiles[i + 1][j + 1]
			];
			if (a === b && b === c && c === d){
				return false;
			}
		}
	}
	return true;
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