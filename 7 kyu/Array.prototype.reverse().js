// -----------------------------------------------------------
// The Array's reverse() method has gone missing! Re-write it, quick-sharp!
// 
// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays 
// should need to be created to pass this kata.
// 
// Here's an example:
// 
// var input = [1, 2, 3, 4];
// input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
// input;           // == [4, 3, 2, 1]  // items reordered in the original array
// -----------------------------------------------------------

Array.prototype.reverse = function() {
    for (let i = this.length - 2; i > -1; i--){
        this.push(this[i]);
        this.splice(i, 1);
    }
    return this;
};

// or

Array.prototype.reverse = function() {
    let arr = this.splice(0);
    while (arr != 0){
        this.push(arr.pop());
    }
    return this;
};

// or

Array.prototype.reverse = function() {
    let a = this.length - 1;
    for(let i = 0; i < a; i++, a--){
        let b = this[i];
        this[i] = this[a];
        this[a] = b;
    }
    return this;
};

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