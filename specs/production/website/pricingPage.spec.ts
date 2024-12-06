import { test, expect } from '@playwright/test';
const { LoginModal } = require('../../../pageobjects/website/loginModal.page');
const { PricingPage } = require('../../../pageobjects/website/pricingPage.page');
const { UpgradePlanModal } = require('../../../pageobjects/website/upgradePlanModal.page');



test.describe('Pricing page tests', () => {

  test('User needs to login first to Kittl and then can proceed with payment plan update', async ({ page }) => {
    const loginModal = new LoginModal(page);
    const pricingPage = new PricingPage(page);
    const upgradePlanModal = new UpgradePlanModal(page);

    await page.goto('');
    await pricingPage.clickGetProPlanBtn();
    await pricingPage.clickAcceptCookies();
    await loginModal.clickOnSignInOption();
    await loginModal.enterEmailPassword("hannanasi1995@gmail.com","384J6Ghb4-YSjLc");
    await loginModal.clickOnLoginBtn();
    await upgradePlanModal.modalChangePlantoProOpened();
    await upgradePlanModal.mainELementsForUpgradePloPlanPresent();
    await upgradePlanModal.clickProceedToCheckout();
    await upgradePlanModal.stepPaymentSelectionOpened();
//Ideally futher I will provide test credit card data and check that user was able to update plan succesfully
  });

test('User can go to Kittl + and contact to sales sucesfully', async ({ page }) => {
    const loginModal = new LoginModal(page);
    const pricingPage = new PricingPage(page);
    const upgradePlanModal = new UpgradePlanModal(page);
    await page.goto('');
    await pricingPage.checkThatKittlPlusHasCorectLink();
  });
});
