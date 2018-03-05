function getIndexToIns(arr, num) {
  // sort the array
  arr = arr.sort((a, b) => a - b);

  // find the first number that is equal to or larger than num
  const x = arr.find((element) => element >= num)

  // find the index of the element, if no element is found returns -1
  let foundIndex = arr.indexOf(x)

  // if index is -1 return length of the array
  if (foundIndex === -1) {
    foundIndex = arr.length; 
  }
  return foundIndex;
}

getIndexToIns([5, 3, 20, 3], 5); // 2
getIndexToIns([2, 5, 10], 15); // 3
