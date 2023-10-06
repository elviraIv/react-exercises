// Comparing two strings ->
// the task is to find whether you can make up the first string
// with words present in the second string.

function harmlessRansonNote(noteText, magazineText) {
  let noteArr = noteText.split(" ");
  let magazineArr = magazineText.split(" ");
  let magazineObj = {};

  magazineArr.forEach((word) => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });

  let isPossible = true;

  noteArr.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) {
        isPossible = false;
      }
    } else {
      isPossible = false;
    }
  });

  return isPossible;
}

harmlessRansonNote(
  "this is a secret note for you from a secret admirer",
  "puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited"
);
