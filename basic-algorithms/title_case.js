function titleCase(str) {
  var word = str.toLowerCase().split(" ");
  var newSen = [];
  
  for (var i = 0; i < word.length; i++) {
   var firstLetter = word[i].charAt(0).toUpperCase();
   var newWord = word[i].replace(word[i].charAt(0), firstLetter);
   newSen.push(newWord);
  //  newSen.push(wordUpperCase);
  };
  return newSen.join(" ");
}

titleCase("I'm a little tea pot");