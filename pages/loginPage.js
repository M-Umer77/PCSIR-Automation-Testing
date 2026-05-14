import { expect } from "@playwright/test";
import { loginLocators } from "../locators/loginLocators.js";

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async gotoLoginPage() {
    await this.page.goto("http://10.3.3.86:4008/signin");
  }

  async verifyLogoVisible() {
    await expect(this.page.locator(loginLocators.pcsirLogo)).toBeVisible();
  }

  async verifyWelcomeHeading() {
    await expect(this.page.locator(loginLocators.welcomeHeading)).toHaveText(
      "Welcome to PCSIR",
    );
  }

  async verifyDescription() {
    await expect(
      this.page.locator(loginLocators.descriptionText),
    ).toBeVisible();
  }

  async verifyLoginPageUrl() {
    await expect(this.page).toHaveURL("http://10.3.3.86:4008/signin");
  }

  async verifyRememberMeCheckbox() {
    await expect(
      this.page.locator(loginLocators.rememberMeCheckboxInput),
    ).toBeVisible();
  }

  async verifyRememberMeLabel() {
    await expect(
      this.page.locator(loginLocators.rememberMeLabel),
    ).toBeVisible();
  }

  async verifyForgetPasswordLink() {
    await expect(
      this.page.locator(loginLocators.forgetPasswordLink),
    ).toBeVisible();
  }

  async verifyRememberMeChecked() {
    await expect(
      this.page.locator(loginLocators.rememberMeCheckboxInput),
    ).toBeChecked();
  }

  async verifyRememberMeUnchecked() {
    await expect(
      this.page.locator(loginLocators.rememberMeCheckboxInput),
    ).not.toBeChecked();
  }

  async verifyForgetPasswordPageUrl() {
    await expect(this.page).toHaveURL("http://10.3.3.86:4008/forget-password");
  }

  // Form Interaction Methods
  async enterEmail(email) {
    await this.page.fill(loginLocators.emailInput, email);
  }

  async enterPassword(password) {
    await this.page.fill(loginLocators.passwordInput, password);
  }

  async clickRememberMe() {
    await this.page.click(loginLocators.rememberMeCheckboxWrapper);
  }

  async clickForgetPassword() {
    await this.page.click(loginLocators.forgetPasswordLink);
  }

  async clickLoginButton() {
    await this.page.click(loginLocators.loginButton);
  }

  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  // Error Verification Methods
  async verifyEmailRequiredError() {
    await expect(
      this.page.locator(loginLocators.emailRequiredError),
    ).toBeVisible();
  }

  async verifyPasswordRequiredError() {
    await expect(
      this.page.locator(loginLocators.passwordRequiredError),
    ).toBeVisible();
  }

  async verifyInvalidCredentialsError() {
    await expect(
      this.page.locator(loginLocators.invalidCredentialsError),
    ).toBeVisible();
  }

  // Dashboard Verification Methods
  async verifyDashboardWelcome() {
    await expect(
      this.page.locator(loginLocators.dashboardWelcomeHeading),
    ).toBeVisible();
  }

  async verifySelectRoleText() {
    await expect(this.page.locator(loginLocators.selectRoleText)).toBeVisible();
  }

  async verifyEntryHubButton() {
    await expect(this.page.locator(loginLocators.entryHubButton)).toBeVisible();
  }

  async verifyMyProfileButton() {
    await expect(
      this.page.locator(loginLocators.myProfileButton),
    ).toBeVisible();
  }

  async verifyUserName() {
    await expect(this.page.locator(loginLocators.userNameText)).toBeVisible();
  }

  async selectProjectExecutiveRole() {
    await this.page.click(loginLocators.projectExecutiveButton);
  }
}
