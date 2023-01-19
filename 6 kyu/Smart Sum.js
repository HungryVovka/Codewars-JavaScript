// -----------------------------------------------------------
// Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be 
// arrays of numbers or nested arrays.
// 
// smartSum(1,2,3,[4,5],6); // returns 21
// smartSum(1,2,[[3,4],5],6); // returns 21
// -----------------------------------------------------------

function smartSum(){
  let answer = 0;
  for (let a = 0; a < arguments.length; a++){
    if (typeof arguments[a] == "number"){
      answer += arguments[a];
    } else {
      for (let b = 0; b < arguments[a].length; b++){
        answer += smartSum(arguments[a][b]);
      }
    }
  }
  return answer;
}