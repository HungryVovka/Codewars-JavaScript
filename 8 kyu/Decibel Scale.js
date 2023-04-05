// -----------------------------------------------------------
// The following formula is called the Decibel Scale.
// 
// The Decibel Scale is used to determine the loudness of a sound, measured in dB:
// 
// β is the result we want, defined in dB;
// We multiply the result of the logarithmic operation by 10, otherwise it'll be called "Bel Scale";
// We provide I, the intensity of the sound wave we need to find the loudness of, which is, for the purposes of this Kata, measured in 2D space and, 
// hence, in Watts per square meter;
// Finally, we divide the intensity by the threshold of human hearing, also measured in Watts per square meter. This is the softest possible sound a 
// human ear can hear;
// Since the threshold of human hearing involves an extremely small, long number, we need to utilize a logarithmic operation that will provide us 
// the result in a convenient way.
// 
// Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.
// 
// Results are automatically rounded to the nearest integer by the test cases.
// -----------------------------------------------------------

function dBScale(intensity) {
	return Math.log10(intensity / 10**(-12)) * 10;
}

// or

function dBScale(intensity) {
	return (Math.log10(intensity) + 12) * 10;
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