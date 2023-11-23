//return every pair of array that adds up to the given sum

//result should be array of arrays
// it is okay one number to be used in several pairs

function twoSum(numArray, sum) {
  let pairs = [];
  let hashtable = [];

  for (let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i];
    let counterPart = sum - currNum;
    // checking hashtable if needed counterPart exists
    if (hashtable.indexOf(counterPart) !== -1) {
      pairs.push([currNum, counterPart]);
    }
    hashtable.push(currNum);
  }

  return pairs;
}

// console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
console.log(twoSum([40, 11, 19, 17, -12], 28));
