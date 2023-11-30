// -----------------------------------------------------------
// Our nuclear missile manager system is coded in Node.js. We are currently testing the system and it seems that the launchAll function does not 
// work as expected. It should launch 5 missiles each 1 second apart. The current code tries to launch the missile #5 five times...
// 
// Can you fix this for us? You know, it's pretty critical code...
// 
// Note: There are 5 missiles labeled i which is a number in {0, 1, 2, 3, 4}. The missile i should be launched after i seconds.
// -----------------------------------------------------------

function launchAll(launchMissile){
	for(var i = 0; i < 5; i++){
		((i) => {
			setTimeout(function(){
				launchMissile(i);
			}, i * 1000)
		})(i);
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