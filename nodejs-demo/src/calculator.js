/**
 * Node.js Demo Application
 * Демонстрація статичного аналізу коду з SonarQube
 */

// Test all workflows - final check

/**
 * Обчислює суму двох чисел
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} Сума чисел
 */
function add(a, b) {
    return a + b;
}

/**
 * Обчислює різницю двох чисел
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} Різниця чисел
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Обчислює добуток двох чисел
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} Добуток чисел
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Обчислює частку двох чисел
 * @param {number} a - Ділене
 * @param {number} b - Дільник
 * @returns {number} Частка
 * @throws {Error} Якщо дільник дорівнює нулю
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error('Ділення на нуль неможливе');
    }
    return a / b;
}

/**
 * Обчислює факторіал числа
 * @param {number} n - Невід'ємне ціле число
 * @returns {number} Факторіал
 * @throws {Error} Якщо n < 0
 */
function factorial(n) {
    if (n < 0) {
        throw new Error("Факторіал не визначений для від'ємних чисел");
    }
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * Перевіряє, чи є число простим
 * @param {number} n - Число для перевірки
 * @returns {boolean} true якщо просте, false інакше
 */
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Знаходить всі прості числа до заданого
 * @param {number} max - Верхня межа
 * @returns {number[]} Масив простих чисел
 */
function findPrimes(max) {
    const primes = [];
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    factorial,
    isPrime,
    findPrimes
};
