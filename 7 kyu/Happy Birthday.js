// -----------------------------------------------------------
// It's your best friend's birthday! You already bought a box for the present. Now you want to pack the present in the box. You want to decorate the box 
// with a ribbon and a bow.
// 
// But how much cm of ribbon do you need?
// 
// Write the method wrap that calculates that!
// 
// A box has a height, a width and a length (in cm). The ribbon is crossed on the side with the largest area. Opposite this side (also the side with the 
// largest area) the loop is bound, calculate with 20 cm more tape.
// 
// wrap(17,32,11) => 162
// wrap(13,13,13) => 124
// wrap(1,3,1) => 32
// 
// Notes:
// height, width and length will always be >0
// 
// The ribbon and the bow on the present looks like this:
// -----------------------------------------------------------

function wrap(height, width, length){
	var p1 = height;
	var p2 = width;
	var p3 = length;
	if (p1 < p2 && p1 < p3){
		return(p1*4 + p2*2 + p3*2 + 20);
	} else if (p2 < p1 && p2 < p3){
		return(p1*2 + p2*4 + p3*2 + 20);
	} else if (p3 < p1 && p3 < p2){
		return(p1*2 + p2*2 + p3*4 + 20);
	} else if (p1 == p2 && p1 < p3){
		return(p1*4 + p2*2 + p3*2 + 20);  
	} else if (p1 == p3 && p1 < p2){
		return(p1*4 + p2*2 + p3*2 + 20);    
	} else if (p2 == p3 && p2 < p1){
		return(p1*2 + p2*4 + p3*2 + 20);   
	} else if (p1 == p3 && p1 == p2){
		return(p1*4 + p2*2 + p3*2 + 20);
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