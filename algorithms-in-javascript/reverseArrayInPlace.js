// Reverse an array: by manipulating, and not using .reverse()
//do not: manipulate the given array, nor push elements into a new array and return it

function reverseArrayInPlace(array) {
  for (let index = 0; index < array.length / 2; index++) {
    let temp = array[index];
    array[index] = array[array.length - 1 - index];
    array[array.length - 1 - index] = temp;
  }
  return array;
}

console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8,9]));
