// -----------------------------------------------------------
// The task
// You have to make a program capable of returning the sum of all the elements of a triangle with side of size n+1n+1n+1.
// 
// The problem
// Your solution has to support 0 <= n≤ <= 10^6 Brute-forcing will not work!
// 
// The definition
// A triangle element aij where i is the column and j is the row can be defined as aij = 2j + i + 1 where 0 <= j <= i <= n
// 
// Examples
// For n = 2:
// 
// 1  2  3      \
//    4  5       \__ 1+2+3+4+5+7 sums to: 22
//       7       /
// sum(2) = 22
// 
// For n = 3:
// 
// 1  2  3  4   \
//    4  5  6    \__ 1+2+3+4+4+5+6+7+8+10 sums to: 50
//       7  8    /
//         10   /
// sum(3) = 50
// 
// Hints
// Euler transform (Optional)
// Sums of powers
// -----------------------------------------------------------

function getSum(n){
  n += 1n;
  var r = 6n;
  return BigInt((4n * (n - 1n) + 3n) * (n + 1n) * n / r);
}