// -----------------------------------------------------------
// Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method 
// has been disabled for you so that you are forced to create your own.
// 
// Example:
// 
// sort([1,3,2]) // should return [1,2,3]
// -----------------------------------------------------------

function sort(items){
  let condition = items.length - 1;
  for (let i = 0; i < condition; i++){
    for (let j = 0; j < condition; j++){
      if (items[j] > items[j + 1]){
        let picking = items[j];
        items[j] = items[j + 1];
        items[j + 1] = picking;
      }
    }
  }
  return items;
}