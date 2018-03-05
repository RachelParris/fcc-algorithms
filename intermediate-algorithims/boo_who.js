function booWho(bool) {
  // typeof checks what data type a value is. 
  // If the evaluated value is a boolean it returns "boolean".
  return typeof bool === "boolean";
}

booWho(null); // false
booWho(false); // true
booWho("true"); // false