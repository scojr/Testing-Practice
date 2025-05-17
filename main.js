export function sum(a, b) {
  return a + b;
}

export function capitalize(string) {
  const firstLetter = string.slice(0, 1);
  const restOfWord = string.slice(1).toLowerCase();
  return firstLetter.toUpperCase() + restOfWord;
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}

export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  }
}

export function caeserCipher(string, shiftFactor) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = (alphabet.slice(shiftFactor) + alphabet.slice(0, shiftFactor));
  const alphabetArray = (alphabet + alphabet.toUpperCase()).split('');
  const cipherArray = (cipher + cipher.toUpperCase()).split('');
  const product = [];
  string.split('').forEach(char => {
    if (alphabetArray.includes(char)) {
      const index = alphabetArray.indexOf(char);
      product.push(cipherArray[index])
    }
    else product.push(char);
  })
  return product.join('');
}