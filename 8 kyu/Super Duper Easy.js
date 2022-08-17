// -----------------------------------------------------------
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
// -----------------------------------------------------------

function problem(a){
  return typeof a === "string" ? "Error" : a * 50 + 6;
}