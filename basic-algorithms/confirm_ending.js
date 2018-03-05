function confirmEnding(str, target) {
  var targetLength = str.substr(target.length);
  var x = str.substring(str.length, [str.length - target.length]);
  
  return (x === target);
}

confirmEnding("Bastian", "n"); // true
confirmEnding("Open sesame", "same"); // true
confirmEnding("Open sesame", "pen"); // false
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // false