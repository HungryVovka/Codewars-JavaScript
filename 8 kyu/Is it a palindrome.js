// -----------------------------------------------------------
// Write a function that checks if a given string (case insensitive) is a palindrome.
// -----------------------------------------------------------

function isPalindrome(s) {
  s = s.toLowerCase();
  return s == s.split(``).reverse().join(``);
}