import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.js";
import loginData from "../testData/loginData.js";

test("Login page UI elements are visible and URL loads successfully", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.verifyLoginPageUrl();
  await loginPage.verifyLogoVisible();
  await loginPage.verifyWelcomeHeading();
  await loginPage.verifyDescription();
  await loginPage.verifyRememberMeCheckbox();
  await loginPage.verifyRememberMeLabel();
  await loginPage.verifyForgetPasswordLink();
  await loginPage.clickRememberMe();
  await loginPage.verifyRememberMeChecked();
  await loginPage.clickRememberMe();
  await loginPage.verifyRememberMeUnchecked();
});

test("Forget Password link navigates to forget-password page", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.clickForgetPassword();
  await loginPage.verifyForgetPasswordPageUrl();
});

test("Valid Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    loginData.validUser.email,
    loginData.validUser.password,
  );

  await loginPage.verifyDashboardWelcome();
});

test("Invalid Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    loginData.invalidUser.email,
    loginData.invalidUser.password,
  );

  await loginPage.verifyInvalidCredentialsError();
});

test("Empty Email Test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    loginData.emptyEmail.email,
    loginData.emptyEmail.password,
  );

  await loginPage.verifyEmailRequiredError();
});

test("Empty Password Test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    loginData.emptyPassword.email,
    loginData.emptyPassword.password,
  );

  await loginPage.verifyPasswordRequiredError();
});

test("Both Fields Empty Test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    loginData.bothEmpty.email,
    loginData.bothEmpty.password,
  );

  await loginPage.verifyEmailRequiredError();
  await loginPage.verifyPasswordRequiredError();
});
