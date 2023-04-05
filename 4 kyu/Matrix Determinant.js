// -----------------------------------------------------------
// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.
// 
// How to take the determinant of a matrix -- it is simplest to start with the smallest cases:
// 
// A 1x1 matrix |a| has determinant a.
// 
// A 2x2 matrix [ [a, b], [c, d] ] or
// 
// |a  b|
// |c  d|
// 
// has determinant: a*d - b*c.
// 
// The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 
// size.
// 
// For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or
// 
// |a b c|  
// |d e f|  
// |g h i|  
// 
// the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 
// matrix created by crossing out the row and column in which the element a occurs:
// 
// |- - -|
// |- e f|
// |- h i|  
// 
// Note the alternation of signs.
// 
// The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:
// 
// det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)
// -----------------------------------------------------------

function determinant(matrix) {
    return matrix.length == 1 ? 
        matrix[0][0] : 
        matrix.length == 2 ? 
        matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0] : 
        matrix[0].reduce((a, b, c) => 
            a + (-1)**(c + 2) * b * determinant(matrix.
                slice(1).map(m => m.filter((i, j) => c != j))),0);
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