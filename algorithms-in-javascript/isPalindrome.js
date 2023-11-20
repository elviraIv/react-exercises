//without using regex
//ignore punctuations

function isPalindrome(string) {
  string = string.toLowerCase();

  let charactersArray = string.split("");
  let validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  let lettersArray = [];

  charactersArray.forEach((char) => {
    if (validCharacters.indexOf(char) > -1) {
      lettersArray.push(char);
    }
  });

  return (lettersArray.join("") === lettersArray.reverse().join(""))
}

console.log(isPalindrome("Madam, I'm Adam"));
