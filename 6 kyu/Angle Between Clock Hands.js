// -----------------------------------------------------------
// Given a Date (in JS and Ruby) or hours and minutes (in C and Python), return the angle between the two hands of a 12-hour analog clock in 
// radians.
// 
// Notes:
// The minute hand always points to the exact minute (there is no seconds hand).
// The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0 because the hour hand is already half way between 6 and 7.
// Return the smaller of the angles ( <= π ).
// Return π if the hands are opposite.
// 
// Examples
// at noon the angle is: 0
// at 3:00 the angle is: π/2 (90 degrees)
// at 6:00 the angle is: π (180 degrees)
// at 9:00 the angle is: π/2 (90 degrees)
// -----------------------------------------------------------

function handAngle (date) {
    var minute = date.getMinutes()/60;
    var hour = (date.getHours() + minute) / 12;
    var angle = Math.abs(hour - minute) * Math.PI * 2;
    return Math.min(angle, Math.PI * 2 - angle);
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