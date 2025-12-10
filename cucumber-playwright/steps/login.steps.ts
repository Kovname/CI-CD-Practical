/**
 * Login Step Definitions
 * Визначення кроків для сценаріїв авторизації
 */
import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Before(async function () {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
});

After(async function () {
    await browser.close();
});

// ========== Given (Припустимо) ==========

Given('я на сторінці входу', async function () {
    await loginPage.navigate();
});

// ========== When (Коли) ==========

When('я вводжу електронну пошту {string}', async function (email: string) {
    await loginPage.enterEmail(email);
});

When('я вводжу пароль {string}', async function (password: string) {
    await loginPage.enterPassword(password);
});

When('я натискаю кнопку {string}', async function (buttonText: string) {
    if (buttonText === 'Увійти') {
        await loginPage.clickLoginButton();
    }
});

// ========== Then (Тоді) ==========

Then('я повинен бачити головну сторінку', async function () {
    await expect(page).toHaveURL(/.*dashboard|home.*/);
});

Then('я повинен бачити привітання {string}', async function (expectedMessage: string) {
    const welcomeMessage = await loginPage.getWelcomeMessage();
    expect(welcomeMessage).toContain(expectedMessage);
});

Then('я повинен бачити повідомлення про помилку {string}', async function (expectedError: string) {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain(expectedError);
});

Then('я повинен бачити {string}', async function (expectedText: string) {
    if (expectedText.includes('сторінку')) {
        await expect(page).toHaveURL(/.*dashboard|home.*/);
    } else if (expectedText.includes('помилку')) {
        const isErrorVisible = await loginPage.isErrorVisible();
        expect(isErrorVisible).toBe(true);
    }
});
