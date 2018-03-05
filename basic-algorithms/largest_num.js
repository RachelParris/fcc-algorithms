/*
Return an array consisting of the largest number from each 
provided sub-array. For simplicity, the provided array will 
contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for 
loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  const flattenArr = arr
    // Sort the elements within each subarray from largest to smallest
    .map((subArr) => subArr.sort((a, b) => b - a))
    // Filter each subarrays keeping the first element in each array
    .map((subArr) => {
    return subArr.filter((element, i) => {
      if (i === 0) return element;
    })
  })
  // Flatten the array from multiple subarrays into one array
    .reduce((total, element) => total.concat(element), []);
  return flattenArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [27, 5, 39, 1001]
