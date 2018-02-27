/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  var reverse = "";
  for (var i = str.length; i > 0; i--) {
    reverse += str[i -1];
  }
  return reverse;
}

reverseString("hello");