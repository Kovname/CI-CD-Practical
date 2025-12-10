/**
 * Cart Page - Page Object Model
 * Опис сторінки кошика для Playwright
 */
import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartItems: Locator;
    readonly cartBadge: Locator;
    readonly emptyCartMessage: Locator;
    readonly checkoutButton: Locator;
    readonly notification: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('[data-testid="cart-item"]');
        this.cartBadge = page.locator('[data-testid="cart-badge"]');
        this.emptyCartMessage = page.locator('[data-testid="empty-cart"]');
        this.checkoutButton = page.locator('[data-testid="checkout-button"]');
        this.notification = page.locator('[data-testid="notification"]');
    }

    /**
     * Перехід до кошика
     */
    async navigate(): Promise<void> {
        await this.page.goto('/cart');
    }

    /**
     * Отримання кількості товарів у кошику
     */
    async getCartItemCount(): Promise<number> {
        const badgeText = await this.cartBadge.textContent();
        return parseInt(badgeText || '0', 10);
    }

    /**
     * Видалення товару з кошика
     */
    async removeItem(productName: string): Promise<void> {
        const item = this.page.locator(`[data-testid="cart-item"]:has-text("${productName}")`);
        await item.locator('[data-testid="remove-button"]').click();
    }

    /**
     * Зміна кількості товару
     */
    async updateQuantity(productName: string, quantity: number): Promise<void> {
        const item = this.page.locator(`[data-testid="cart-item"]:has-text("${productName}")`);
        await item.locator('[data-testid="quantity-input"]').fill(quantity.toString());
    }

    /**
     * Перевірка чи кошик порожній
     */
    async isEmpty(): Promise<boolean> {
        return await this.emptyCartMessage.isVisible();
    }

    /**
     * Отримання тексту сповіщення
     */
    async getNotificationText(): Promise<string> {
        return await this.notification.textContent() || '';
    }

    /**
     * Перехід до оформлення замовлення
     */
    async proceedToCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }
}
