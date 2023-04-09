import {test, expect} from '@playwright/test';
import { BrowserStack } from '../src/pages/browserStack.page';
import Data from '../testData/test.data'


let StackPage: BrowserStack

  test.beforeEach(async ({page}) => {
    StackPage = new BrowserStack(page);
    await StackPage.gotoUrl();
    expect(page.url()).toBe(Data.baseUrl);
    expect(await page.title()).toBe(Data.pageTitle);
  })

test('BrowserStack DEMO', async () => {
  // StackPage = new BrowserStack(page);
  await test.step('validate the vendor links', async () => {
    await StackPage.appleItem.click();

    await expect(StackPage.foundsProductsText).toContainText('9')
  })
  
})



test('Add Item to cart', async () => {

  await test.step('click on One Item', async () => {
    await StackPage.addIphoneItemtoCartButton.click();
    await expect(StackPage.bagQuantityText).toHaveText('1');
  })
})

test('Remove Item from cart', async () => {

  await test.step('add item to cart', async () => {
   await StackPage.addIphoneItemtoCartButton.click();
  })

  await test.step('delete item in cart', async () => {
    await StackPage.deleteItemButton.click();
    await expect(StackPage.emptyShelfText).toHaveText(Data.emptyShelfText);
  })
})

test('Add more than one item to cart', async () => {
    await test.step('add two items to cart', async () => {
      await StackPage.addIphoneItemtoCartButton.click();
      await StackPage.addOnePlusItemToCartButton.click();
    });

    await test.step('validate the number of items in cart', async () => {
      await expect(StackPage.bagQuantityText).toHaveText('2');
    })
})

// test('Remove items from cart', async () => {
//   await test.step('add two items to cart', async () => {
//     await StackPage.addIphoneItemtoCartButton.click();
//     await StackPage.addOnePlusItemToCartButton.click();
//   });

//   await test.step('remove all items from cart', async () => {
//     await StackPage.deleteItemButton.click();
//     await StackPage.deleteItemButton.click();
//     await expect(StackPage.emptyShelfText).toHaveText(Data.emptyShelfText);
//   })
// })

