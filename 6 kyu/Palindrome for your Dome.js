// -----------------------------------------------------------
// A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either 
// forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia
// 
// Our goal is to determine whether or not a given string is a valid palindrome or not.
// 
// Like the above examples, here are a few test cases which are also populated:
// 
// "Amore, Roma" => valid
// "A man, a plan, a canal: Panama" => valid
// "No 'x' in 'Nixon'" => valid
// "Abba Zabba, you're my only friend" => invalid
// 
// You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also 
// be tested against a random string generator 50 times which are guaranteed to produce valid palindromes.
// 
// Notes:
// 
// The empty string "" can be read forward or backward the same, it's a palindrome in our case.
// -----------------------------------------------------------

function palindrome(str){
    str = str.toLowerCase().replace(/[^0-9a-z]/g, "");
    return str == str.split("").reverse().join("");
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