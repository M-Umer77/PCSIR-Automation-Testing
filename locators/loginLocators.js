export const loginLocators = {
  // Login Page UI Elements
  pcsirLogo: 'img[alt="pcsir-logo"]',
  welcomeHeading: 'h2:has-text("Welcome to PCSIR")',
  descriptionText:
    'p:has-text("PCSIR provides comprehensive management tools for your organization.")',

  // Login Form Elements
  emailInput: 'input[placeholder="Email"]',
  passwordInput: 'input[placeholder="Password"]',
  rememberMeCheckboxWrapper: "span.MuiButtonBase-root.MuiCheckbox-root",
  rememberMeCheckboxInput: 'input[type="checkbox"]',
  rememberMeLabel: "text=Remember Me",
  forgetPasswordLink: "text=Forget Your Password?",
  loginButton: 'button:has-text("Login")',

  // Error Messages
  emailRequiredError: "text=Please enter Email Address!",
  passwordRequiredError: "text=Please enter password!",
  invalidCredentialsError: "text=Invalid email or password",

  // Dashboard Elements (after login)
  entryHubButton: 'button:has-text("Entry Hub")',
  myProfileButton: 'button:has-text("My Profile")',
  userNameText: "text=Super Administrator",
  dashboardWelcomeHeading: 'h3:has-text("Welcome to PCSIR")',
  selectRoleText: "text=Select Role",
  projectExecutiveButton: 'button:has-text("Project Executive")',
};
