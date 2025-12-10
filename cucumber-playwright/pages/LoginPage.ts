/**
 * Login Page - Page Object Model
 * Опис сторінки авторизації для Playwright
 */
import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;
    readonly welcomeMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('[data-testid="email-input"]');
        this.passwordInput = page.locator('[data-testid="password-input"]');
        this.submitButton = page.locator('[data-testid="login-button"]');
        this.errorMessage = page.locator('[data-testid="error-message"]');
        this.welcomeMessage = page.locator('[data-testid="welcome-message"]');
    }

    /**
     * Перехід на сторінку входу
     */
    async navigate(): Promise<void> {
        await this.page.goto('/login');
    }

    /**
     * Введення електронної пошти
     */
    async enterEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    /**
     * Введення паролю
     */
    async enterPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    /**
     * Натискання кнопки входу
     */
    async clickLoginButton(): Promise<void> {
        await this.submitButton.click();
    }

    /**
     * Повна авторизація одним методом
     */
    async login(email: string, password: string): Promise<void> {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    /**
     * Отримання тексту помилки
     */
    async getErrorMessage(): Promise<string> {
        return await this.errorMessage.textContent() || '';
    }

    /**
     * Отримання тексту привітання
     */
    async getWelcomeMessage(): Promise<string> {
        return await this.welcomeMessage.textContent() || '';
    }

    /**
     * Перевірка видимості повідомлення про помилку
     */
    async isErrorVisible(): Promise<boolean> {
        return await this.errorMessage.isVisible();
    }
}
