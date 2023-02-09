// -----------------------------------------------------------
// Convert a hash into an array. Nothing more, Nothing less.
// 
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// 
// should be converted into
// 
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// 
// Note: The output array should be sorted alphabetically by key name.
// 
// Good Luck!
// -----------------------------------------------------------

function convertHashToArray(hash){
  var answer = [];
  for (let h in hash){
    answer.push([h, hash[h]]);
  }
  return answer.sort();
}

// or

function convertHashToArray(hash){
  return Object.entries(hash).sort();
}