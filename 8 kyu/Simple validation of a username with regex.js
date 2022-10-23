// ---------------------------------------------------------
// Write a simple regex to validate a username. Allowed characters are:
// 
// lowercase letters,
// numbers,
// underscore
// 
// Length should be between 4 and 16 characters (both included).
// ---------------------------------------------------------

function validateUsr(username) {
  let answer = /^[0-9_a-z]{4,16}$/.test(username);
  return answer;
}