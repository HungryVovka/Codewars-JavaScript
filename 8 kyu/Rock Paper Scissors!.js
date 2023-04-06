// -----------------------------------------------------------
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// 
// Examples(Input1, Input2 --> Output):
// 
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
// -----------------------------------------------------------

const rps = (p1, p2) => {
	var cases = ['rock', 'paper', 'scissors'];
	if (p1 == p2){
		return "Draw!";
	} else if (p1 == cases[0] && p2 == cases[1]){
		return "Player 2 won!";
	} else if (p1 == cases[0] && p2 == cases[2]){
		return "Player 1 won!";
	} else if (p1 == cases[1] && p2 == cases[2]){
		return "Player 2 won!";
	} else if (p1 == cases[1] && p2 == cases[0]){
		return "Player 1 won!";
	} else if (p1 == cases[2] && p2 == cases[0]){
		return "Player 2 won!";
	} else if (p1 == cases[2] && p2 == cases[1]){
		return "Player 1 won!";
	} 
};

// -----------------------------------------------------------
// License
// Tasks are the property of Codewars (https://www.codewars.com/) 
// and users of this resource.
// 
// All solution code in this repository 
// is the personal property of Vladimir Rukavishnikov
// (vladimirrukavishnikovmail@gmail.com).
// 
// Copyright (C) 2022 Vladimir Rukavishnikov
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