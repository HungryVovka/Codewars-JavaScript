// -----------------------------------------------------------
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to 
// take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the 
// button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each 
// letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives 
// you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false 
// otherwise.
// 
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an 
// empty array (that's not a walk, that's standing still!).
// -----------------------------------------------------------

function isValidWalk(walk) {
    var e = [], n = [], s = [], w = [];
    for (let i = 0; i < walk.length; i++){
        if (walk[i] == 'e'){
            e.push('e');
        } 
        if (walk[i] == 'n'){
            n.push('n');
        } 
        if (walk[i] == 's'){
            s.push('s');
        }
        if (walk[i] == 'w'){
            w.push('w');
        }
    }
    return (e.length == w.length) && (n.length == s.length) && walk.length == 10;
}

// or

function isValidWalk(walk) {
    var e = [], n = [], s = [], w = [];
    walk.map(i =>{
        if (i == 'e'){
            e.push('e');
        } 
        if (i == 'n'){
            n.push('n');
        } 
        if (i == 's'){
            s.push('s');
        }
        if (i == 'w'){
            w.push('w');
        }
    })
    return (e.length == w.length) && (n.length == s.length) && walk.length == 10;
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