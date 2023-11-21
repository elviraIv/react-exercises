//Take the varters from the given string and shift them a certain number of positions, direction is determined wheter the number is positive/negative
function ceaserCipher(string, number) {
  number = number % 26;
  var lowerCaseString = string.toLowerCase();
  var alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  var newString = "";

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }

    var currentIndex = alphabetArr.indexOf(currentLetter);
    var newIndex = currentIndex + number;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (string[i] === string[i].toUpperCase()) {
      newString += alphabetArr[newIndex].toUpperCase();
    } else newString += alphabetArr[newIndex];
  }

  return newString;
}

console.log(ceaserCipher("zoo keeper", 2));
