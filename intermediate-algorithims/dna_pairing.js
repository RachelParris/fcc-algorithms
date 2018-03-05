function pairElement(str) {
  let dna = [];

  // Split string into an array
  str = str.split("");
  
  // Interate over each letter in the array
  str.map((letter) => {

    // For each letter push the corresponding DNA pairing to the dna array 
    switch(letter) {
      case "A":
        dna.push(["A","T"]);
        break;
      case "T":
        dna.push(["T","A"]);
        break;
      case "C":
        dna.push(["C","G"]);
        break;
      case "G":
        dna.push(["G", "C"]);
        break;
    }
  });
  return dna;
}

pairElement("GCG"); //  [["G", "C"], ["C","G"],["G", "C"]]