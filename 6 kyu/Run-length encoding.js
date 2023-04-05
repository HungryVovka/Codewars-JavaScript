// -----------------------------------------------------------
// Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value 
// occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia
// 
// Task
// Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one 
// can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be 
// minimal, ie. for all i the values si and si+1 should differ.
// 
// Examples
// As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:
// 
// runLengthEncoding("hello world!")
//  //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// 
// It's very effective if the same data value occurs in many consecutive data elements:
// 
// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]
// -----------------------------------------------------------

var runLengthEncoding = function(str){
    var arr = [], i = 1;
    for (var j = 0; j < str.length; j++){
        if (str[j] == str[j + 1]){
            i++;
        } else {
            arr.push([i, str[j]]);
            i = 1;
        }
    }
    return arr;
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