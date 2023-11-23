function getMean(numArr) {
  let sum = numArr.reduce((acc, currentValue) => acc + currentValue, 0);

  return sum / numArr.length;
}

function getMedian(numArr) {
  numArr.sort((a, b) => a - b);
  let median;

  if (numArr.length % 2 !== 0) {
    median = numArr[Math.floor(numArr.length / 2)];
  } else {
    let mid1 = numArr[numArr.length / 2 - 1];
    let mid2 = numArr[numArr.length / 2];
    median = (mid1 + mid2) / 2;
  }

  return median;
}

function getMode(numArr) {
  // hash table
  let modeObj = {};

  numArr.forEach((num) => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  let maxFrequency = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modes.push(num);
  }

  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

function meanMedianMode(numArr) {
  //call the three functions -> return obj which has the values

  return {
    mean: getMean(numArr),
    meadian: getMedian(numArr),
    mode: getMode(numArr),
  };
}

console.log(meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]));
