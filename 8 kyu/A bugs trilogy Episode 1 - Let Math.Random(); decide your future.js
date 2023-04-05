// -----------------------------------------------------------
// Our friend Pac has finally decided to pursue a career in the coding industry.
// He is a newbie, he needs to learn properly.
// Therefore, Pac wants to apply for the worldwide famous -and very demanding-
// 'C0d3r 1ns1d3' Academy for beginners.
// In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
// He has been sent an email from the Academy with the following instructions,
// 
// Dear Pac,  
// This is the first exercise. Find out what's wrong and fix the code.  
// You have 15 minutes to send a solution.  
// Good Luck.
// 
// This code is a mess! Would you help Pac to fix the code in time?
// 
// (This might be helpful -> Math.random();)
// 
// This is my first Kata, so please any feedback (especially on Test Cases) is welcome!
// -----------------------------------------------------------

function yourFutureCareer(){
	var career = Math.random();
	if (career <= 0.32){
		return "FrontEnd Developer";
	} else if (career <= 0.65){
		return "BackEnd Developer";
	} else {
		return "Full-Stack Developer";
	}
}

yourFutureCareer();

// or

function yourFutureCareer(){
	var career = Math.random(), dev = " Developer";
	if (career > 0.65) return "Full-Stack" + dev;
	if (career > 0.32) return "BackEnd" + dev;
	return "FrontEnd" + dev;
}

yourFutureCareer();

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