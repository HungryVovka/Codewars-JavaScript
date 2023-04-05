// -----------------------------------------------------------
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should 
// also be stripped out.
// 
// Example:
// 
// Given an input string of:
// 
// apples, pears # and bananas
// grapes
// bananas !apples
// 
// The output expected would be:
// 
// apples, pears
// grapes
// bananas
// 
// The code would be called like so:
// 
// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
// -----------------------------------------------------------

function solution(input, markers) {
    return input.split("\n").map(i => markers.reduce(
        (i, j) => i.split(j)[0].trim(), i)).join("\n");
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