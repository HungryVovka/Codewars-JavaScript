// -----------------------------------------------------------
// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The 
// solution should work for array of any length.
// 
// For example:
// 
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// 
// After adding the property the result should be:
// 
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];
// 
// The questions array is already defined for you and is not the same as the one in the example.
// -----------------------------------------------------------

questions.forEach( function(questions) {
    questions.usersAnswer = null;
});

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