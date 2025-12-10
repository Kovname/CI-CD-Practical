/**
 * Cucumber.js Configuration
 * Конфігурація для запуску BDD тестів
 */
module.exports = {
  default: {
    // Шлях до .feature файлів
    paths: ['features/**/*.feature'],
    
    // Шлях до step definitions
    require: ['steps/**/*.ts'],
    
    // Використовуємо ts-node для TypeScript
    requireModule: ['ts-node/register'],
    
    // Формат виводу результатів
    format: [
      'progress-bar',
      'html:reports/cucumber-report.html'
    ],
    
    // Публікація результатів
    publishQuiet: true
  }
};
