// -----------------------------------------------------------
// #Bubbleing around
// 
// Since everybody hates chaos and loves sorted lists we should implement some more sorting algorithms. Your task is to implement a Bubble sort 
// (for some help look at https://en.wikipedia.org/wiki/Bubble_sort) and return a list of snapshots after each change of the initial list.
// 
// e.g.
// 
// If the initial list would be l=[1,2,4,3] my algorithm rotates l[2] and l[3] and after that it adds [1,2,3,4] to the result, which is a list of snapshots.
// 
// [1,2,4,3] should return [ [1,2,3,4] ]
// [2,1,4,3] should return [ [1,2,4,3], [1,2,3,4] ]
// [1,2,3,4] should return []
// -----------------------------------------------------------

function bubble(arr) {
  var answer = [];
  let n = arr.length;
  let i = 0;
  while (i < (n - 1)){
    let j = 0;
    while (j < (n - 1 - i)){
      if (arr[j] > arr[j+1]){
        const temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
        answer.push([...arr]);
      }
      j++;
    }
    i++;
  }
  return answer;
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
// Copyright (C) 2025 Vladimir Rukavishnikov
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