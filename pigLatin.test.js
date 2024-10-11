const { translate, translateWord, isVowel } = require('./pigLatin');

describe('isVowel', () => {
  test('returns true for vowels', () => {
    expect(isVowel('a')).toBe(true);
    expect(isVowel('e')).toBe(true);
    expect(isVowel('i')).toBe(true);
    expect(isVowel('o')).toBe(true);
    expect(isVowel('u')).toBe(true);
  });

  test('returns false for consonants, including y', () => {
    expect(isVowel('b')).toBe(false);
    expect(isVowel('y')).toBe(false);
  });
});

describe('translateWord', () => {
  test('translates words starting with different vowels', () => {
    expect(translateWord('apple')).toBe('appleway');
    expect(translateWord('egg')).toBe('eggway');
    expect(translateWord('ink')).toBe('inkway');
    expect(translateWord('ocean')).toBe('oceanway');
    expect(translateWord('under')).toBe('underway');
  });

  test('converts words to lowercase before translating', () => {
    expect(translateWord('Apple')).toBe('appleway');
    expect(translateWord('EGG')).toBe('eggway');
  });

  test('translates words starting with one consonant', () => {
    expect(translateWord('hello')).toBe('ellohay');
    expect(translateWord('world')).toBe('orldway');
    expect(translateWord('yellow')).toBe('ellowyay');
  });

  test('translates words starting with two consonants', () => {
    expect(translateWord('string')).toBe('ingstray');
    expect(translateWord('cloud')).toBe('oudclay');
  });

  test('translates words starting with three consonants', () => {
    expect(translateWord('spring')).toBe('ingspray');
    expect(translateWord('three')).toBe('eethray');
  });

  test('treats y as a consonant', () => {
    expect(translateWord('yellow')).toBe('ellowyay');
    expect(translateWord('rhythm')).toBe('ythmrhay');
  });
});

describe('Words starting with different vowels', () => {
  test('translates the word "apple"', () => {
    expect(translate('apple')).toBe('appleway');
  });

  test('translates the word "else"', () => {
    expect(translate('else')).toBe('elseway');
  });

  test('translates the word "ice"', () => {
    expect(translate('ice')).toBe('iceway');
  });

  test('translates the word "orange"', () => {
    expect(translate('orange')).toBe('orangeway');
  });

  test('translates the word "umbrella"', () => {
    expect(translate('umbrella')).toBe('umbrellaway');
  });
});

describe('Words starting with one consonant', () => {
  test('translates the word "giraffe"', () => {
    expect(translate('giraffe')).toBe('iraffegay');
  });

  test('translates the word "banana"', () => {
    expect(translate('banana')).toBe('ananabay');
  });

  test('translates the word "cat"', () => {
    expect(translate('cat')).toBe('atcay');
  });

  test('translates the word "dog"', () => {
    expect(translate('dog')).toBe('ogday');
  });
});

describe('Specific tests for unique words and phrases', () => {
  test('translates the word "Durell"', () => {
    expect(translate('Durell')).toBe('urellday');
  });

  test('translates the phrase "Grand Circus"', () => {
    expect(translate('Grand Circus')).toBe('andgray ircuscay');
  });

  test('translates the word "Detroit"', () => {
    expect(translate('Detroit')).toBe('etroitday');
  });
});

describe('Additional unique tests', () => {
  test('translates hyphenated words', () => {
    expect(translate('mother-in-law')).toBe('othermay-inway-awlay');
  });

  test('translates words with apostrophes', () => {
    expect(translate("it's a cat's world")).toBe("it'sway away at'scay orldway");
  });

  test('translates single-letter words', () => {
    expect(translate('a i')).toBe('away iway');
  });

  test('translates words with mixed case', () => {
    expect(translate('HeLLo WoRLd')).toBe('ellohay orldway');
  });

  test('handles sentences with punctuation', () => {
    expect(translate('Hello, world!')).toBe('ellohay, orldway!');
  });
});