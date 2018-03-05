function translatePigLatin(str) {
  // regex to match any vowels
  const vowel = /[aeiou]/gi;
  let strArr = str.split("");
  let newStr = "";

  // "glove".search(vowel) outputs: 2
  const vowelIndex = str.search(vowel);

  if (vowelIndex === 0) {
    // If a string starts with a vowel add "way"
    newStr = str + "way";
  } else {
    // ["g", "l", "o", "v", "e"].splice(0, vowelIndex = 2).join("") outputs: "gl"
    const constCluster = strArr.splice(0, vowelIndex).join("");

    // "ove" + "gl" + "ay" outputs: "oveglay"
    newStr = strArr.join("") + constCluster + "ay";
  }

  return newStr;
}

translatePigLatin("california"); // aliforniacay
translatePigLatin("algorithm"); //algorithmway
translatePigLatin("glove"); // oveglay
