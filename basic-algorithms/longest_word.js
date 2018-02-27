function findLongestWord(str) {
  str = str.split(" ");
  var longestWord = 0;

  for(var i = 0; i < str.length; i++) {

   longestWord < str[i].length ? longestWord = str[i].length : longestWord = longestWord;

  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");