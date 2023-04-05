// -----------------------------------------------------------
// Generating Generators - Generators #3
// Generating Generators, you have had some experiences with generators now so you have decided to attempt something a little more interesting 
// again to help your learning of times tables.
// 
// You want to create a generator, which yields generators, which yields strings.
// 
// Following from the Multiplication - Generators #2 kata you want to reuse your previous multiplication generator to yield the same tables as before 
// but this time you want to yield multiplication tables within a range of numbers.
// 
// For example with an input of generate(1, 3) you must yield 3 separate generators each yielding 10 strings with the multiplication table.
// 
// generate(1, 3) 
// 
// // generator 1
// '1 x 1 = 1'
// '1 x 2 = 2'
// '1 x 3 = 3'
// '1 x 4 = 4'
// '1 x 5 = 5'
// '1 x 6 = 6'
// '1 x 7 = 7'
// '1 x 8 = 8'
// '1 x 9 = 9'
// '1 x 10 = 10'
// 
// // generator 2
// '2 x 1 = 2'
// '2 x 2 = 4'
// '2 x 3 = 6'
// '2 x 4 = 8'
// '2 x 5 = 10'
// '2 x 6 = 12'
// '2 x 7 = 14'
// '2 x 8 = 16'
// '2 x 9 = 18'
// '2 x 10 = 20'
// 
// // generator 3
// '3 x 1 = 3'
// '3 x 2 = 6'
// '3 x 3 = 9'
// '3 x 4 = 12'
// '3 x 5 = 15'
// '3 x 6 = 18'
// '3 x 7 = 21'
// '3 x 8 = 24'
// '3 x 9 = 27'
// '3 x 10 = 30'
// 
// More Info:
// Iterators and Generators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// Generating generators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// Generators (PHP): http://php.net/manual/en/language.generators.php
// -----------------------------------------------------------

function* generator(a, b){
    function* generatingGenerators(x1){
        for (let x2 = 1; x2 <= 10; x2++){
            yield `${x1} x ${x2} = ${x1 * x2}`;
        }
    }
    for (let i = a; i <= b; i++){
        yield generatingGenerators(i);
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