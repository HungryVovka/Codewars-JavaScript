// -----------------------------------------------------------
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// -----------------------------------------------------------

function boolToWord(boolian){
    if (boolian == true){
        return('Yes');
    } else if (boolian == false){
        return('No');
    }
}

// or

function boolToWord(bool){
  return bool === false ? 'No' : 'Yes';
}