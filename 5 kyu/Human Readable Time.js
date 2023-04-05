// -----------------------------------------------------------
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// 
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// 
// The maximum time never exceeds 359999 (99:59:59)
// 
// You can find some examples in the test fixtures.
// -----------------------------------------------------------

function humanReadable (seconds) {
    var hour = ("0" + Math.floor(seconds / 3600)).slice(-2);
    var min = ("0" + Math.floor(seconds % 3600 / 60)).slice(-2);
    var sec = ("0" + seconds % 3600 % 60).slice(-2);
    return hour + ":" + min + ":" + sec;
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