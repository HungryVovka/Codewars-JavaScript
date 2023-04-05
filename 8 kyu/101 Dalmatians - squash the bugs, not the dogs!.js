// -----------------------------------------------------------
// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to 
// respond!
// 
// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
// 
// The number of dogs will always be a number and there will always be at least 1 dog.
// 
// Good luck!
// -----------------------------------------------------------

var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

function howManyDalmatians(n){
	if(n <= 10){
		return(dogs[0]);
	} else if(n <= 50){
		return(dogs[1]);
	} else if(n <= 100){
		return(dogs[2]);      
	} else if(n <= 101){
		return(dogs[3]);
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