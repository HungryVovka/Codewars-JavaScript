// -----------------------------------------------------------
// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The 
// start and the end number are both inclusive!
// 
// Examples:
// 
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// 
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
// 
// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.
// 
// Have fun coding it and please don't forget to vote and rank this kata! :-)
// 
// I have also created other katas. Take a look if you enjoyed this kata!
// -----------------------------------------------------------

function dontGiveMeFive(start, end){
    var arr = [];
    while (start <= end){
        let i = String(start);
        if (i.includes("5")){
            start += 1;
        } else {
            arr.push(i);
            start += 1;
        }
    }
    return arr.length;
}

// or

function dontGiveMeFive(start, end){
    var nofive = 0;
    for (let i = start; i <= end; i++){
        if (!/5/.test(i)){
            nofive += 1;
        }
    }
    return nofive;
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