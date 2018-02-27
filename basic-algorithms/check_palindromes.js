/*
Return true if the given string is a palindrome. Otherwise, return false.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces 
  and symbols) and turn everything lower case in order to check for palindromes.
*/

function palindrome(str) {
  var str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  var reverseStr = "";

  for(var i = 0; i < str.length; i++) {
    reverseStr += str[str.length - i - 1];
  }
  return str === reverseStr;
}

palindrome("eye"); // true
palindrome("My age is 0, 0 si ega ym."); // true
palindrome("1 eye for of 1 eye."); // false