// -----------------------------------------------------------
// The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z
// 
// The Cat In The Hat is 2,000,000 cat units tall.
// 
// Each cat is 2.5 times bigger than the cat underneath their hat.
// 
// Find the total height of the cats if they are standing on top of one another.
// 
// Counting starts from the Cat In The Hat
// 
// n = the number of cats
// 
// fix to 3 decimal places.
// -----------------------------------------------------------

function height(n){
  let catUnits = 2e6, answer = 0;
  for (let i = 0; i < n; i++){
    catUnits /= 2.5;
    answer += catUnits;
  }
  answer += 2e6;
  return answer.toFixed(3);
}

// or

function height(n){
  let answer = (1 - 0.4**(n + 1)) * 2e6 / (1 - 0.4);
  return answer.toFixed(3);
}