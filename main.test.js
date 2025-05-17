import { sum, capitalize, reverseString, calculator, caeserCipher, analyzeArray } from "./main";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// capitalize
test('capitalize string "apple" to "Apple"', () => {
  expect(capitalize("apple")).toBe("Apple");
});

// reverseString
test('reverse string "apple" to "elppa"', () => {
  expect(reverseString("apple")).toBe("elppa");
});

// calculator
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('divides 25 / 5 to equal 5', () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

test('multiplies 4 * 3 to equal 12', () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

// caeserCipher

test('shift "xyz" by 3 to return "abc"', () => {
  expect(caeserCipher('xyz', 3)).toBe('abc');
});

test('shift "HeLLo" by 3 to return "KhOOr"', () => {
  expect(caeserCipher('HeLLo', 3)).toBe('KhOOr');
});

test('shift "Hello, World!" by 3 to return "Khoor, Zruog!"', () => {
  expect(caeserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// analyzeArray

const expectedOutcome = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
}

test('analyze array to object with expected outcome', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject(expectedOutcome)
});