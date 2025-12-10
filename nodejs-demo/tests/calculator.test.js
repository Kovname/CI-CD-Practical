/**
 * Jest Tests for Calculator Module
 */

const calculator = require('../src/calculator');

describe('Calculator', () => {
    describe('add', () => {
        test('should add two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        test('should add negative numbers', () => {
            expect(calculator.add(-2, -3)).toBe(-5);
        });

        test('should add with zero', () => {
            expect(calculator.add(5, 0)).toBe(5);
        });
    });

    describe('subtract', () => {
        test('should subtract two numbers', () => {
            expect(calculator.subtract(10, 4)).toBe(6);
        });

        test('should return negative for larger subtrahend', () => {
            expect(calculator.subtract(4, 10)).toBe(-6);
        });
    });

    describe('multiply', () => {
        test('should multiply two numbers', () => {
            expect(calculator.multiply(5, 6)).toBe(30);
        });

        test('should return zero when multiplying by zero', () => {
            expect(calculator.multiply(5, 0)).toBe(0);
        });
    });

    describe('divide', () => {
        test('should divide two numbers', () => {
            expect(calculator.divide(20, 4)).toBe(5);
        });

        test('should throw error when dividing by zero', () => {
            expect(() => calculator.divide(10, 0)).toThrow('Ділення на нуль неможливе');
        });
    });

    describe('factorial', () => {
        test('should return 1 for factorial of 0', () => {
            expect(calculator.factorial(0)).toBe(1);
        });

        test('should return 1 for factorial of 1', () => {
            expect(calculator.factorial(1)).toBe(1);
        });

        test('should return 120 for factorial of 5', () => {
            expect(calculator.factorial(5)).toBe(120);
        });

        test('should throw error for negative numbers', () => {
            expect(() => calculator.factorial(-1)).toThrow("Факторіал не визначений для від'ємних чисел");
        });
    });

    describe('isPrime', () => {
        test('should return false for 1', () => {
            expect(calculator.isPrime(1)).toBe(false);
        });

        test('should return true for 2', () => {
            expect(calculator.isPrime(2)).toBe(true);
        });

        test('should return true for 17', () => {
            expect(calculator.isPrime(17)).toBe(true);
        });

        test('should return false for 4', () => {
            expect(calculator.isPrime(4)).toBe(false);
        });
    });

    describe('findPrimes', () => {
        test('should find primes up to 10', () => {
            expect(calculator.findPrimes(10)).toEqual([2, 3, 5, 7]);
        });

        test('should return empty array for 1', () => {
            expect(calculator.findPrimes(1)).toEqual([]);
        });
    });
});
