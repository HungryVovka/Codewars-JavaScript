// -----------------------------------------------------------
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
// 
// examples:
// 
// uniTotal("a") == 97 uniTotal("aaa") == 291
// -----------------------------------------------------------

function uniTotal(s){
  var total = 0;
  s = s.split("");
  s.forEach(i => {
    total += i.charCodeAt(0);
  })
  return total;
}

// or

function uniTotal(s){
  return s.split("").reduce((total, i) => total + i.charCodeAt(0), 0);
}