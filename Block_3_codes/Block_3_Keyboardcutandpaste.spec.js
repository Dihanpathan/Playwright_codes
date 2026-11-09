//TEST23
const { test, expect } = require('@playwright/test');

test('Keyboard cut and paste login test on recruiter.bdjobs.com', async ({ page }) => {
  test.setTimeout(40000);

  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForTimeout(3000);

  // Username field
  const usernameField = page.getByPlaceholder('Enter your username');

  await expect(usernameField).toBeVisible();
  await usernameField.click();
  await page.waitForTimeout(1000);

  // Type username
  await page.keyboard.type('mehedi595');
  await page.waitForTimeout(1500);

  // Select username
  await page.keyboard.press('Control+A');
  await page.waitForTimeout(1000);

  // Cut username
  await page.keyboard.press('Control+X');
  await page.waitForTimeout(1500);

  // Paste username back
  await page.keyboard.press('Control+V');
  await page.waitForTimeout(1500);

  // Password field
  const passwordField = page.getByPlaceholder('Enter your password');

  await expect(passwordField).toBeVisible();
  await passwordField.click();
  await page.waitForTimeout(1000);

  // Type password
  await page.keyboard.type('Password');
  await page.waitForTimeout(1500);


  // Click Sign in button
  const signInButton = page.getByRole('button', {
    name: /^sign in$/i
  });

  await expect(signInButton).toBeVisible();
  await signInButton.click();

  await page.waitForTimeout(5000);
});
