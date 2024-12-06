import { Page } from 'playwright-core'

exports.LoginModal = class LoginModal {
  private page: Page
  readonly signInLink: Locator;
  readonly signUpModal: Locator;
  readonly loginBtn: Locator;
  readonly emailField: Locator;
  readonly pwdField: Locator;


  constructor(page: Page) {
    this.page = page;
    this.signInLink=page.locator('label:text("Sign in")');
    this.signUpModal=page.locator('[data-testid="auth-modal--container"]');
    this.loginBtn=page.locator('[data-testid="login"]');
    this.emailField=page.locator('[name="email"]');
    this.pwdField=page.locator('[name="password"]');
  }

  // Actions

async clickOnSignInOption(){
  await this.signInLink.waitFor({state:"visible"});
  await this.signInLink.click();
}

async enterEmailPassword(email, password){
  await this.emailField.fill(email);
  await this.pwdField.fill(password);
}
async clickOnLoginBtn(){
  await this.loginBtn.click();
}
}