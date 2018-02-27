function factorialize(num) {
  var x = 1;
  for(var i = 1; i <= num; i++) {
    x *= i;
  }
  return x;
}

factorialize(5);