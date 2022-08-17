// -----------------------------------------------------------
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// 
// P.S. Each array includes only integer numbers. Output is a number too.
// -----------------------------------------------------------

function arrayPlusArray(arr1, arr2) {
  var sum_a = 0;
  for (var n = 0; n < arr1.length; n++){
    sum_a += arr1[n]
  }
  for (var p = 0; p < arr2.length; p++){
    sum_a += arr2[p]
  }
  return sum_a;
}