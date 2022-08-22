// -----------------------------------------------------------
// Implement a function which convert the given boolean value into its string representation.
// 
// Note: Only valid inputs will be given.
// -----------------------------------------------------------

function booleanToString(b){
  if (b == true){
    return 'true';
  } else if (b == false){
    return 'false';
  }
}

// or

function booleanToString(b){
  return b == true ? "true" : "false";
}