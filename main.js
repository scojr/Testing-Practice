export function sum(a, b) {
  return a + b;
}

export function capitalize(string) {
  const firstLetter = string.slice(0, 1);
  const restOfWord = string.slice(1).toLowerCase();
  return firstLetter.toUpperCase() + restOfWord;
}