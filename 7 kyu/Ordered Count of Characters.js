// -----------------------------------------------------------
// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
// 
// Example:
// 
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
// -----------------------------------------------------------

function orderedCount (text) {
  var orderedcount = [...new Set(text)];
  return orderedcount.map(i => [i, text.split(i).length - 1]);
}