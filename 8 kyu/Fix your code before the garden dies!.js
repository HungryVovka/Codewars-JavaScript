// -----------------------------------------------------------
// You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the 
// amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous 
// neighbour hacked your computer and filled your code with bugs.
// 
// Your task is to debug the code before your plants die!
// -----------------------------------------------------------

function rainAmount(mm){
	if (mm < 40){
		return `You need to give your plant ${40 - mm}mm of water`;
	} else {
		return "Your plant has had more than enough water for today!";
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