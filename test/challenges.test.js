import { absolute, isEven, isOdd, removeVowels, filterInteger, isPrime } from '../js/challenges.js';

// absolute
test('absolute of -4 is 4', () => {
    expect(absolute(-4)).toBe(4);
});

test('absolute of 8 is 8', () => {
    expect(absolute(8)).toBe(8);
});

// isEven
test('4 is even', () => {
    expect(isEven(4)).toBeTruthy();
});

test('3 is not even', () => {
    expect(isEven(3)).toBeFalsy();
});

// isOdd
test('3 is odd', () => {
    expect(isOdd(3)).toBeTruthy();
});

test('6 is not odd', () => {
    expect(isOdd(6)).toBeFalsy();
});

// removeVowels
test('hello world! without voyels is hll wrld!', () => {
    expect(removeVowels('hello world!')).toEqual('hll wrld!');
});

test('I\'m driving a truck contains trck', () => {
    expect(removeVowels('I\'m driving a truck')).toMatch(/trck/);
});


// filterInteger
test('there are two integer in the array', () => {
    expect(filterInteger([1, "Bonjour", 3.54, '2', 54, "Unit"]).length).toEqual(2);
});

// filterInteger
test('array contains 1 and 54', () => {
    expect(filterInteger([1, "Bonjour", 3.54, '2', 54, "Unit"])).toContain(1);
    expect(filterInteger([1, "Bonjour", 3.54, '2', 54, "Unit"])).toContain(54);
});

// isPrime
test('13 is a prime number', () => {
    expect(isPrime(13)).toBeTruthy();
});

test('9 is not a prime number', () => {
    expect(isPrime(9)).not.toBeTruthy();
});