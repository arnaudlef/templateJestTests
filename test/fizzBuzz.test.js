import { fizzBuzz } from '../js/fizzBuzz.js';

/**
 - Rappel des 3 lois :
    1. Vous devez écrire un test qui échoue avant de pouvoir écrire le code de production correspondant.
    2. Vous devez écrire une seule assertion à la fois, qui fait échouer le test ou qui échoue à la compilation.
    3. Vous devez écrire le minimum de code de production pour que l'assertion du test en échec soit satisfaite.


   # http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd

 -
 -        
 */


describe('Fizz Buzz', () => {

    test('fizzBuzz returns 1', () => {
        expect(fizzBuzz(1)).toBe(1);
    });

    test('fizzBuzz returns 2', () => {
        expect(fizzBuzz(2)).toBe(2);
    });

    test('fizzBuzz for multiple of 3 returns Fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    test('fizzBuzz for multiple of 3 returns Fizz', () => {
        expect(fizzBuzz(6)).toBe('Fizz');
    });

    test('fizzBuzz for multiple of 5 returns Buzz', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    test('fizzBuzz for multiple of 5 returns Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    });

    test('fizzBuzz for multiple of 3 and 5 returns FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

});

