//Given an integer n, for every integer i <= n, the task is to print “FizzBuzz” if i is divisible by 3 and 5, 
//“Fizz” if i is divisible by 3, “Buzz” if i is divisible by 5 or i (as a string) 
// if none of the conditions are true.

function fizzBuzz(num) {
  for (let index = 1; index <= num; index++) {
    if (index % 15 === 0) {
      console.log("FizzBizz");
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Bizz");
    } else {
      console.log(index);
    }
  }
}

fizzBuzz(20);
