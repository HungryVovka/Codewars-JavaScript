// -----------------------------------------------------------
// For this kata you will have to forget how to add two numbers.
// 
// It can be best explained using the following meme:
// 
// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016
// 248 + 208 = 4416
// 
// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
// 
// You may assume both integers are positive integers.
// -----------------------------------------------------------

function add(num1, num2) {
  if (num1 == 0 && num2 == 0){
    return 0;
  } else {
    let sum214 = "";
    while (num1 || num2){
      sum214 = num1 % 10 + num2 % 10 + sum214;
      num1 = Math.floor(num1 / 10);
      num2 = Math.floor(num2 / 10);
    }
    return parseInt(sum214)
  }
}