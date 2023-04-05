// -----------------------------------------------------------
// How many ways can you make the sum of a number?
// From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)
// 
// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive 
// integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a 
// composition. For example, 4 can be partitioned in five distinct ways:
// 
// 4
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1
// 
// Examples
// Basic
// sum(1) // 1
// sum(2) // 2  -> 1+1 , 2
// sum(3) // 3 -> 1+1+1, 1+2, 3
// sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3
// 
// sum(10) // 42
// 
// Explosive
// sum(50) // 204226
// sum(80) // 15796476
// sum(100) // 190569292
// 
// See here for more examples.
// -----------------------------------------------------------

var esum = [];

function explosive (a, b){
    if (a < 0){
        return 0;
    }
    if (a == 0){
        return 1;
    }
    if (b == 0){
        return 0;
    }
    if (esum[a] == undefined){
        esum[a] = [];
    }
    var answer = esum[a][b];
    if (typeof answer != 'number') {
        answer = explosive(a - b, b) + explosive(a, b - 1);
        esum[a][b] = answer;
    };
    return answer;
};

function sum (n){
    return explosive(n, n);
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