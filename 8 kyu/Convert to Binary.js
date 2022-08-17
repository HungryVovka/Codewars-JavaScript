// -----------------------------------------------------------
// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
// 
// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// 
// Example:
// 
// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */
// -----------------------------------------------------------

function toBinary(n){
  var binar = "";
  if (n != 0){
    while (n >= 1){
      if (n %2 == 0){
        binar = binar + "0";
        n = n / 2;
      } else {
        binar = binar + "1";
        n = (n - 1) / 2;
      }
    }
  } else {
    binar = "0";
  } 
  return parseInt(binar.split("").reverse().join(""))
}