// -----------------------------------------------------------
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be 
// capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// 
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// -----------------------------------------------------------

function toCamelCase(str){
    if (str == ""){
        return "";
    }
    return str.replace(/[-_](.)/g, (_, i) => i.toUpperCase());
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