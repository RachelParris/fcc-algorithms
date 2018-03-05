function translatePigLatin(str) {
  const vowel = /[aeiou]/gi;
  let strArr = str.split("");
  let newStr = "";

  const vowelIndex = str.search(vowel);

  if (vowelIndex === 0) {
    newStr = str + "way";
  } else {
    const constCluster = strArr.splice(0, vowelIndex).join("");
    newStr = strArr.join("") + constCluster + "ay";
  }

  return newStr;
}

translatePigLatin("california"); // aliforniacay
translatePigLatin("algorithm"); //algorithmway
translatePigLatin("glove"); // oveglay
