function pairElement(str) {
  let dna = [];
  str = str.split("");
  
  str.map((letter) => {
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