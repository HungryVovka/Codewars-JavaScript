// -----------------------------------------------------------
// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.
// 
// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in 
// the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of 
// Human. Your job is to implement the Human, Man and Woman classes.
// -----------------------------------------------------------

class God{
	static create(){
		return [new Man("Adam"), new Woman("Eva")];
	}
}

class Human{
	true;
}

class Man extends Human{}

class Woman extends Human{}

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