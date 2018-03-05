/*
Return an array consisting of the largest number from each 
provided sub-array. For simplicity, the provided array will 
contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for 
loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  // Sort the elements within each subarray from largest to smallest
  const flattenArr = arr
    .map((subArr) => subArr.sort((a, b) => b - a))
    .map((subArr) => {
    return subArr.filter((element, i) => {
      if (i === 0) return element;
    })
  })
    .reduce((total, element) => total.concat(element), []);
  return flattenArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [27, 5, 39, 1001]
