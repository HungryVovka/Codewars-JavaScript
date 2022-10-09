// -----------------------------------------------------------
// Write a function that returns a string in which firstname is swapped with last name.
// 
// Example(Input --> Output)
// 
// "john McClane" --> "McClane john"
// -----------------------------------------------------------

function nameShuffler(name){
  var arr = name.split(" ");
  return arr[1] + " " + arr[0];
}

// or

function nameShuffler(name){
  return name.split(" ").reverse().join(" ");
}