function bouncer(arr) {
  var trueValues = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) trueValues.push(arr[i]);
  }
  return trueValues;
}

bouncer([7, "ate", "", false, 9]); // [7, "ate", 9]
bouncer([false, null, 0, NaN, undefined, ""]); // []