// -----------------------------------------------------------
// I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would 
// bring the best marks at the end of the school year. it's time to keep promises and I count on you.
// 
// You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:
// 
// {
//   'algebra': 6,
//   'history': 8,
//   'physics': 9,
//   'geography': 2,
//   'chemistry': 9
// }
// 
// Return please :
// 
// 'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.
// 
// 'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.
// 
// 'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
// 
// If two or three sons have the same highest marks, you need to choose the younger one. Use the age table which is constant and preloaded:
// 
// const ageTable = {
//                   'firstSonAge': 14,
//                   'secondSonAge': 9,
//                   'thirdSonAge': 8
//                 }
// -----------------------------------------------------------

function whoseBicycle(diary1, diary2, diary3) {
	var arr = [Object.values(diary1), Object.values(diary2), Object.values(diary3)].map(i => i.reduce((a, b) => a + b, 0));
	var lastindex = arr.lastIndexOf(Math.max(...arr));
	if (lastindex == 0){
		return 'I need to buy a bicycle for my first son.';
	} else if (lastindex == 1){
		return 'I need to buy a bicycle for my second son.';
	} else {
		return 'I need to buy a bicycle for my third son.';
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