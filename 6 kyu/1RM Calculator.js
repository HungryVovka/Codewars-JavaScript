// -----------------------------------------------------------
// You just got done with your set at the gym, and you are wondering how much weight you could lift if you did a single repetition. Thankfully, a few 
// scholars have devised formulas for this purpose (from Wikipedia(https://en.wikipedia.org/wiki/One-repetition_maximum)):
// 
// Epley 
// 1RM = w * (1 + r / 30)
// 
// McGlothin
// 1RM = (100 * w) / (101.3 - 2.67123 * r)
// 
// Lombardi
// 1RM = w * r**0.1
// 
// Your function will receive a weight w and a number of repetitions r and must return your projected one repetition maximum. Since you are not 
// sure which formula to use and you are feeling confident, your function will return the largest value from the three formulas shown above, rounded 
// to the nearest integer. However, if the number of repetitions passed in is 1 (i.e., it is already a one rep max), your function must return w. Also, if the 
// number of repetitions passed in is 0 (i.e., no repetitions were completed), your function must return 0.
// -----------------------------------------------------------

function calculate1RM(w, r){
    if (w == 0 || r == 0){return 0};
    if (r == 1){return w};
    var epley = w * (1 + r / 30);
    var mc_glothin = (100 * w) / (101.3 - 2.67123 * r);
    var lombardi = w * r**0.1;
    return Math.round(Math.max(epley, mc_glothin, lombardi));
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