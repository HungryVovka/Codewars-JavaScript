// -----------------------------------------------------------
// After yet another dispute on their game the Bingo Association decides to change course and automate the game.
// 
// Can you help the association by writing a method to create a random Bingo card?
// 
// Bingo Cards
// A Bingo card contains 24 unique and random numbers according to this scheme:
// 
// 5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75
// 
// Task
// Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:
// 
// [ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
// 
// The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.
// -----------------------------------------------------------

function getCard() {
    let arr = [];
    while (arr.length < 5) {
        let b = "B" + Math.floor((Math.random() * 15) + 1).toString();
        if (arr.indexOf(b) == -1)
            arr.push(b);
    }
    while (arr.length < 10) {
        let i = "I" + Math.floor((Math.random() * 15) + 16).toString();
        if (arr.indexOf(i) == -1)
            arr.push(i);
    }
    while (arr.length < 14) {
        let n = "N" + Math.floor((Math.random() * 15) + 31).toString();
        if (arr.indexOf(n) == -1)
            arr.push(n);
    }
    while (arr.length < 19) {
        let g = "G" + Math.floor((Math.random() * 15) + 46).toString();
        if (arr.indexOf(g) == -1)
            arr.push(g);
    }
    while (arr.length < 24) {
        let o = "O" + Math.floor((Math.random() * 15) + 61).toString();
        if (arr.indexOf(o) == -1)
            arr.push(o);
    }
    return arr;
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