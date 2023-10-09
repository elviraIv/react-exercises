function reverseWords(string) {
  let array = string.split(" ");

  let reversedWordsArray = [];

  array.forEach((word) => {
    let reversedWord = "";
    for (let index = word.length - 1; index >= 0; index--) {
      reversedWord += word[index];
    }
    reversedWordsArray.push(reversedWord);
  });

  return reversedWordsArray.join(" ");
}

reverseWords("this is a string of words");
//siht si a gnirts fo sdrow
