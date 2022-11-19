// -----------------------------------------------------------
// A rook is a piece used in the game of chess which is played on a board of square grids. A rook can only move vertically or horizontally from its current 
// position and two rooks attack each other if one is on the path of the other. In the following figure, the dark squares represent the reachable locations 
// for rook R1 from its current position. The figure also shows that the rook R1 and R2 are in attacking positions where R1 and R3 are not. R2 and R3 are 
// also in non-attacking positions.
// 
// Now, given two numbers n and k, your job is to determine the number of ways one can put k rooks on an nxn chessboard so that no two of them 
// are in attacking positions.
// 
// Range: (1 ≤ n ≤ 15) and (0 ≤ k ≤ n2)
// -----------------------------------------------------------

function rooks(n, k){
  let x = 0n;
  let y = 1n;
  while (x < k){
    y = y * n * n;
    n = n - 1n;
    y = y / (x + 1n);
    x++;
  }
  return y;
}

// or

function rooks(n, k){
  let x = BigInt(1);
  let y = BigInt(1);
  while (x <= k){
    y = y * n * n / x;
    x++;
    n--;
  }
  return y;
}