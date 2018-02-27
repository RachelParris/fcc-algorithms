function mutation(arr) {
  firstStr = arr[0].toLowerCase();
  secondStr = arr[1].toLowerCase();

  for(var i = 0; i < secondStr.length; i++) {
    if (firstStr.indexOf(secondStr[i]) === -1)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]); // false
mutation(["hello", "Hello"]); //true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // true