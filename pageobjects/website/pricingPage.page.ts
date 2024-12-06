import { Page } from 'playwright-core'
import { test, expect } from '@playwright/test';

exports.PricingPage = class PricingPage {
private page: Page
readonly GetProBtn: Locator;
readonly allowCookies: Locator;

  constructor(page: Page) {
    this.page = page;
    this.GetProBtn=page.locator('div:text("Get Pro")');
    this.allowCookies=page.locator('button[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]');
    this.contactSalesBtn=page.locator('a[href="/plus"] div:text("Contact Sales")');

}


  // Actions
  //-------------------------------------------------------------------------------------------------------------------

async clickAcceptCookies() {
    await this.allowCookies.click()
  }
async clickGetProPlanBtn() {
    await this.GetProBtn.click()
  }
async clickContactSalesBtn() {
    await this.contactSalesBtn.focus();
    await this.contactSalesBtn.click()
  }

async checkThatKittlPlusHasCorectLink() {
    await this.contactSalesBtn.focus();
    await expect(this.contactSalesBtn).toBeVisible();
  }

}