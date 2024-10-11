function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

function translateWord(word) {
  word = word.toLowerCase();
  if (isVowel(word[0])) {
    return word + 'way';
  } else {
    let firstVowelIndex = 0;
    while (
      firstVowelIndex < word.length &&
      !isVowel(word[firstVowelIndex]) &&
      !(word[firstVowelIndex] === 'y' && firstVowelIndex > 0)
    ) {
      firstVowelIndex++;
    }
    if (word.slice(0, firstVowelIndex).endsWith('q') && word[firstVowelIndex] === 'u') {
      firstVowelIndex++;
    }
    return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
  }
}

function translate(input) {
  const words = input.split(' ');
  const translatedWords = words.map(translateWord);
  return translatedWords.join(' ');
}

module.exports = { translate, translateWord, isVowel };
