// -----------------------------------------------------------
// Who is the killer?
// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the 
// murders.
// 
// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:
// 
// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// 
// and also a list of the names of the dead people:
// 
// ['Lucas', 'Bill']
// 
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
// -----------------------------------------------------------

function killer(suspectInfo, dead) {
	for (let i in suspectInfo) {
		if (dead.every((j) => suspectInfo[i].includes(j))){
			return i;
		}
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