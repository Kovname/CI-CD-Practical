/**
 * Entry point for Node.js Demo Application
 */

const calculator = require('./calculator');

console.log('🚀 Node.js CI/CD Demo Application');
console.log('==================================');
console.log(`2 + 3 = ${calculator.add(2, 3)}`);
console.log(`10 - 4 = ${calculator.subtract(10, 4)}`);
console.log(`5 × 6 = ${calculator.multiply(5, 6)}`);
console.log(`20 ÷ 4 = ${calculator.divide(20, 4)}`);
console.log(`5! = ${calculator.factorial(5)}`);
console.log(`Прості числа до 20: ${calculator.findPrimes(20).join(', ')}`);
