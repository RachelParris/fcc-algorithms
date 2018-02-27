function repeatStringNumTimes(str, num) {
  // repeat after me
  var newStr = "";
  if (num <= 0) {
    return "";
  }

  var i = 0;
  while (i < num) {
    newStr += str;
    i++;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 8);