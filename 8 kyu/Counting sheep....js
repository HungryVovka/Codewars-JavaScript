// -----------------------------------------------------------
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in 
// the array (true means present).
// 
// For example,
// 
// [True,  True,  True,  False,
//   True,  True,  True,  True ,
//   True,  False, True,  False,
//   True,  False, False, True ,
//   True,  True,  True,  True ,
//   False, False, True,  True]
// 
// The correct answer would be 17.
// 
// Hint: Don't forget to check for bad values like null/undefined
// -----------------------------------------------------------

function countSheeps(arrayOfSheep) {
  var answer = 0;
  for(var s = 0; s < arrayOfSheep.length; s++){
    if (arrayOfSheep[s] == true){
      answer += 1;
      }
    }
    return answer;
}