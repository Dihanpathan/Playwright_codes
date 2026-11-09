//TEST 28

const { test, expect } = require('@playwright/test');

test('Visibility and availability checks on recruiter.bdjobs.com', async ({ page }) => {
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForTimeout(2000);

  //Define variables
  const usernameField = page.getByPlaceholder('Enter your username');
  const passwordField = page.getByPlaceholder('Enter your password');
  const signInButton = page.getByRole('button', { name: /^sign in$/i });

  // Username field checks
  await expect(usernameField).toBeVisible();
  await expect(usernameField).toBeEnabled();
  //Check username field is visible and enabled 
  if (await usernameField.isVisible() && await usernameField.isEnabled()) {
    await usernameField.fill('mehedi595');
  }

  // Password field checks
  await expect(passwordField).toBeVisible();
  await expect(passwordField).toBeEnabled();

  //Check username field is visible and enabled
  if (await passwordField.isVisible() && await passwordField.isEnabled()) {
    await passwordField.fill('a');
  }

  // Sign in button checks
  await expect(signInButton).toBeVisible();
  await expect(signInButton).toBeEnabled();
 //Check Signin button  is visible and enabled
  if (await signInButton.isVisible() && await signInButton.isEnabled()) {
    await signInButton.click();
  }

  await page.waitForTimeout(3000);
});