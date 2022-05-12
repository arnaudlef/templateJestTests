
function absolute(number) {
    if (number < 0)
        number *= -1

    return number;
}

function isEven(number) {
    return (number % 2 == 0);
}

function isOdd(number) {
    return (number % 2 != 0);
}

function removeVowels(text) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = "";

    for (let i = 0; i < text.length; i++) {
        if (! vowels.includes(text.charAt(i)))
            result += text.charAt(i);
    }

    return result;
}

function filterInteger(array) {
    let result = [];

    array.forEach((item) => {
        if (Number.isInteger(item))
            result.push(item);
    });

    return result;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }

    return (n > 1);
}

export { absolute, isEven, isOdd, removeVowels, filterInteger, isPrime };




