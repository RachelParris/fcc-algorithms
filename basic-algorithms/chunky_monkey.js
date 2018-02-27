function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  for(var i = 0; i < arr.length; i += size) {
    var subArr = arr.slice(i, (size + i));
    newArr.push(subArr);
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]