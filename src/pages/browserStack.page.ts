import { Page, Locator } from "@playwright/test";
import Data from '../../testData/test.data'

export class BrowserStack {
    private page: Page;
    appleItem: Locator;
    foundsProductsText: Locator;
    addIphoneItemtoCartButton: Locator;
    addOnePlusItemToCartButton: Locator;
    bagQuantityText: Locator;
    deleteItemButton: Locator;
    emptyShelfText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.appleItem = page.locator('.checkmark', {hasText: 'Apple'});
        this.foundsProductsText = page.locator('.products-found');
        this.addIphoneItemtoCartButton = page.locator('.shelf-item').
        filter({has: page.getByText('iPhone 12', {exact: true})})
        .locator('.shelf-item__buy-btn');
        this.addOnePlusItemToCartButton = page.locator('.shelf-item').
        filter({has: page.getByText('One Plus 6T', {exact: true})})
        .locator('.shelf-item__buy-btn');
        this.bagQuantityText = page.locator('.bag__quantity');
        this.deleteItemButton = page.locator('.shelf-item__del').first();
        this.emptyShelfText = page.locator('.shelf-empty');
    }

    async gotoUrl(url: string = Data.baseUrl) {
        await this.page.goto(url);
    }
}