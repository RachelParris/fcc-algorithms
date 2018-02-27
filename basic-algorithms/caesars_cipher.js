function rot13(str) { // LBH QVQ VG!
  unicode = [];
  temp = [];
  newStr = "";
  for(var i = 0; i < str.length; i++) {
   uni = str.charCodeAt([i]);
    unicode.push(uni);
  }
  for (var j = 0; j < unicode.length; j++) {
    if (unicode[j] <= 64) {
      temp.push(unicode[j]);
    } else if (unicode[j] > 77) {
      temp.push(unicode[j] - 13);
    } else if (unicode[j] >= 65 && unicode[j] <= 77) {
       temp.push(unicode[j] + 13);
    }
  }

  for(var k=0; k < temp.length; k++) {
    newStr += String.fromCharCode(temp[k]);
  }
  
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");