/**
 - Les règles du FizzBuzz :
   fizzBuzz est une fonction qui prend un nombre en argument et retourne ce nombre.
   
   Cependant :
        - Pour les multiples de 3, la fonction retourne "Fizz" à la place du nombre.
        - Pour les multiples de 5, la fonction retourne "Buzz" à la place du nombre.
        - Pour les multiples de 3 et 5, la fonction retourne "Fizz Buzz" à la place du nombre.

 -
 -        
 */

function fizzBuzz(number) {
	if (number % 5 === 0 && number % 3 === 0) 
		return 'FizzBuzz';

	if (number % 5 === 0) 
		return 'Buzz';

	if (number % 3 === 0) 
		return 'Fizz';

    return number;
}

/** After refactoring 

function fizzBuzz(number) {
	let str = ''
	if (number % 3 === 0) str += 'Fizz';
	if (number % 5 === 0) str += 'Buzz';
	
    return str.length ? str : number;
}

*/

export { fizzBuzz }