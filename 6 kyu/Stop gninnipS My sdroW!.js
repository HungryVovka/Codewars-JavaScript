// -----------------------------------------------------------
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the 
// name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// 
// Examples:
// 
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"
// -----------------------------------------------------------

function spinWords(string){
    let reversed = new Array();
    let spl_str = string.split(" ");
    for (let i = 0; i < spl_str.length; i++){
        if (spl_str[i].length > 4){
            reversed.push(spl_str[i].split("").reverse().join(""));
        } else {
            reversed.push(spl_str[i]);
        }
    }
    return reversed.join(" ");
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