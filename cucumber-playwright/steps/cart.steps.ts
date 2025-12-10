/**
 * Cart Step Definitions
 * Визначення кроків для сценаріїв кошика
 */
import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;
let cartPage: CartPage;

Before(async function () {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
    cartPage = new CartPage(page);
});

After(async function () {
    await browser.close();
});

// ========== Given (Припустимо) ==========

Given('я авторизований користувач', async function () {
    // Симуляція авторизації (встановлення токена)
    await page.goto('/login');
    // Mock авторизації
});

Given('я на сторінці каталогу', async function () {
    await page.goto('/catalog');
});

Given('у моєму кошику є товар {string}', async function (productName: string) {
    // Симуляція додавання товару до кошика
    await page.evaluate((name) => {
        localStorage.setItem('cart', JSON.stringify([{ name, quantity: 1 }]));
    }, productName);
});

Given('у моєму кошику є товар {string} у кількості {int}', async function (productName: string, quantity: number) {
    await page.evaluate((data) => {
        localStorage.setItem('cart', JSON.stringify([{ name: data.name, quantity: data.quantity }]));
    }, { name: productName, quantity });
});

// ========== When (Коли) ==========

When('я натискаю кнопку {string} для товару {string}', async function (buttonText: string, productName: string) {
    const productCard = page.locator(`[data-testid="product-card"]:has-text("${productName}")`);
    await productCard.locator(`button:has-text("${buttonText}")`).click();
});

When('я переходжу до кошика', async function () {
    await cartPage.navigate();
});

When('я змінюю кількість товару {string} на {int}', async function (productName: string, quantity: number) {
    await cartPage.updateQuantity(productName, quantity);
});

When('я намагаюсь додати товар {string} до кошика', async function (productName: string) {
    const productCard = page.locator(`[data-testid="product-card"]:has-text("${productName}")`);
    await productCard.locator('button:has-text("Додати до кошика")').click();
});

// ========== Then (Тоді) ==========

Then('кількість товарів у кошику повинна бути {int}', async function (expectedCount: number) {
    const actualCount = await cartPage.getCartItemCount();
    expect(actualCount).toBe(expectedCount);
});

Then('я повинен бачити повідомлення {string}', async function (expectedMessage: string) {
    const notification = await cartPage.getNotificationText();
    expect(notification).toContain(expectedMessage);
});

Then('кошик повинен бути порожнім', async function () {
    const isEmpty = await cartPage.isEmpty();
    expect(isEmpty).toBe(true);
});

Then('загальна кількість товарів повинна бути {int}', async function (expectedTotal: number) {
    const count = await cartPage.getCartItemCount();
    expect(count).toBe(expectedTotal);
});
