import { Page } from 'playwright-core'
import { test, expect } from '@playwright/test';

exports.UpgradePlanModal = class UpgradePlanModal {
  private page: Page
  readonly amountYearlyForProPlan: Locator;
  readonly changeModalProPlanHeader: Locator;
  readonly kittleCreditsForProPlan: Locator;
  readonly subscriptionPlanSelector: Locator;
  readonly proceedToCheckout: Locator;
  readonly headerPaymentMethodSelection: Locator;
  readonly creditCardSelector: Locator;
  readonly payPalSelector: Locator;


  constructor(page: Page) {
    this.page = page;
    this.changeModalProPlanHeader=page.locator('[data-testid="modal--foreground"] h3:text("Upgrade to Pro plan")');
    this.amountYearlyForProPlan=page.locator('[data-testid="modal--foreground"] p:text("(€120 billed annually)")');
    this.kittleCreditsForProPlan=page.locator('[data-testid="modal--foreground"] p:text("200 credits/month")');
    this.subscriptionPlanSelector=page.locator('[data-testid="subscriptionmodal--plan-selector"]');
    this.proceedToCheckout=page.locator('[data-testid="subscriptionModal--proceed-to-checkout-button"]');
    this.headerPaymentMethodSelection=page.locator('[data-testid="modal--foreground"] h3:text("Payment method")');
    this.creditCardSelector=page.locator('button[id="card-tab"]');
    this.payPalSelector=page.locator('[data-testid="paypal"]');
}

  // Actions
async clickProceedToCheckout() {
    await this.proceedToCheckout.click()
  }

async modalChangePlantoProOpened() {
    await expect(this.changeModalProPlanHeader).toBeVisible();
 }
async mainELementsForUpgradePloPlanPresent (){
    await expect(this.amountYearlyForProPlan).toBeVisible();
    await expect(this.kittleCreditsForProPlan).toBeVisible();
    await expect(this.subscriptionPlanSelector).toBeVisible();
}
async stepPaymentSelectionOpened() {
    await expect(this.headerPaymentMethodSelection).toBeVisible();
 }

}