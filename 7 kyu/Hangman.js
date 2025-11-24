// -----------------------------------------------------------
// Hangman
// Hangman is a paper and pencil guessing game for two or more players. One player thinks of a word, phrase or sentence and the other tries to guess 
// it by suggesting letters, within a certain number of guesses.
// 
// Everytime the player misses a word, a part of the sketch is drawn:
// 
// Hangman
// 
// If the player finds the word before being hung he wins. He has 6 chances to miss before being hung.
// 
// Your task
// You have to implement the function hangman that receives a word and an array of letters as arguments and has to return the result of the 
// game:
// 
// input:
// 
// word: The word the player had to guess
// letters: An array with the sequence of letters which the player guessed
// 
// output:
// 
// result: true if the player managed to find the word or false if he was hung
// 
// Example
// Input: hangman('codewars',['a','e','i','o','u','c','d','p','r','k','l','j','h'])
// 
// Expected output: false
// -----------------------------------------------------------

function hangman(word, letters){
  var misses = 0;
  var maxMisses = 6;
  var found = {};
  
  for (let i = 0; i < word.length; i++) found[word[i]] = false;
  
  for (let j = 0; j < letters.length; j++){
    var letter = letters[j];
    var hit = false;
    
    for (let k = 0; k < word.length; k++){
      if (word[k] === letter){
        found[letter] = true;
        hit = true;
      }
    }
    if (!hit) misses++;
    if (misses > maxMisses) return false;
  }
  for (let m = 0; m < word.length; m++){
    if (!found[word[m]]) return false;
  }
  return true;
}

// -----------------------------------------------------------
// License
// Tasks are the property of Codewars (https://www.codewars.com/) 
// and users of this resource.
// 
// All solution code in this repository 
// is the personal property of Vladimir Rukavishnikov
// (vladimirrukavishnikovmail@gmail.com).
// 
// Copyright (C) 2025 Vladimir Rukavishnikov
// 
// This file is part of the HungryVovka/Codewars-JavaScript
// (https://github.com/HungryVovka/Codewars-JavaScript)
// 
// License is GNU General Public License v3.0
// (https://github.com/HungryVovka/Codewars-JavaScript/blob/main/LICENSE)
// 
// You should have received a copy of the GNU General Public License v3.0
// along with this code. If not, see http://www.gnu.org/licenses/
// -----------------------------------------------------------