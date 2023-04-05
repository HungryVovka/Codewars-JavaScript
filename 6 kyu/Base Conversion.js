// -----------------------------------------------------------
// In this kata you have to implement a base converter, which converts positive integers between arbitrary bases / alphabets. Here are some pre-
// defined alphabets:
// 
// var Alphabet = {
//   BINARY:        '01',
//   OCTAL:         '01234567',
//   DECIMAL:       '0123456789',
//   HEXA_DECIMAL:  '0123456789abcdef',
//   ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
//   ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// };
// 
// The function convert() should take an input (string), the source alphabet (string) and the target alphabet (string). You can assume that the input 
// value always consists of characters from the source alphabet. You don't need to validate it.
// 
// Examples
// // convert between numeral systems
// convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
// convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
// convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
// convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"
// 
// // other bases
// convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
// convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
// convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
// convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
// 
// Additional Notes:
// 
// The maximum input value can always be encoded in a number without loss of precision in JavaScript. In Haskell, intermediate results will 
// probably be too large for Int.
// The function must work for any arbitrary alphabets, not only the pre-defined ones
// You don't have to consider negative numbers
// -----------------------------------------------------------

function convert(input, source, target) {
    var con = "";
    var basecon = 0;
    for (let i = 0; i < input.length; i++){
        basecon = basecon * source.length + source.indexOf(input[i]);
    }
    if (basecon == 0){
        return target[0];
    }
    while (basecon > 0){
        con += target[basecon % target.length];
        basecon = Math.floor(basecon / target.length);
    }
    return con.split("").reverse().join("");
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