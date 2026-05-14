import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage.js";
import loginData from "../testData/loginData.js";

test("Valid Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    loginData.validUser.email,
    loginData.validUser.password,
  );

  await loginPage.verifyDashboard();
});

test("Invalid Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();

  await loginPage.login(
    loginData.invalidUser.email,
    loginData.invalidUser.password,
  );

  await loginPage.verifyErrorMessage();
});
