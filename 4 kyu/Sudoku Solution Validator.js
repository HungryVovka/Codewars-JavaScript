// -----------------------------------------------------------
// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and 
// each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)
// 
// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it 
// is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or 
// more zeroes are considered to be invalid solutions.
// 
// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
// 
// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// 
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false
// -----------------------------------------------------------

function validSolution(board){
  var cell1 = 0, cell2 = 0, cell3 = 0, 
      cell4 = 0, cell5 = 0, cell6 = 0, 
      cell7 = 0, cell8 = 0, cell9 = 0;
  board.forEach(i => {
    cell1 += i[0];
    cell2 += i[1];
    cell3 += i[2];
    cell4 += i[3];
    cell5 += i[4];
    cell6 += i[5];
    cell7 += i[6];
    cell8 += i[7];
    cell9 += i[8];
  });
  return cell1 == 45 && cell2 == 45 && cell3 == 45 
      && cell4 == 45 && cell5 == 45 && cell6 == 45 
      && cell7 == 45 && cell8 == 45 && cell9 == 45 
      && board[4][5] != board[5][4];
}