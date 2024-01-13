function countDuplicateLetters(word) {
  const letterCount = {};
  let num = 0;

  while (num < word.length) {
    const letterData = word.charAt(num)

    if (letterCount[letterData] === undefined) {
      letterCount[letterData] = 1;
    } else {
      letterCount[letterData] += 1;
    }

    num++;
  }

  return letterCount;
}

const word = "aaaaauuaaaaaaaabbbaaaaa";
const result = countDuplicateLetters(word);
console.log(result);


