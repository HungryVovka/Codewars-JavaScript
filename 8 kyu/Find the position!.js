// -----------------------------------------------------------
// When provided with a letter, return its position in the alphabet.
// 
// Input :: "a"
// 
// Ouput :: "Position of alphabet: 1"
// -----------------------------------------------------------

function position(alphabet){
  return `Position of alphabet: ${alphabet.charCodeAt() - 96}`;
}