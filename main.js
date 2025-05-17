export function sum(a, b) {
  return a + b;
}

export function capitalize(string) {
  const firstLetter = string.slice(0, 1);
  const restOfWord = string.slice(1).toLowerCase();
  return firstLetter.toUpperCase() + restOfWord;
}

export function reverseString(string) {
  return string.split("").reverse().join("");
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