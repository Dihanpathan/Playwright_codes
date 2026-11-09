const { test, expect } = require('@playwright/test');

test('Session timeout verification on real website', async ({ page, context }) => {

  // Open login page → page.goto()
  await page.goto('https://the-internet.herokuapp.com/login');

  // Enter username → page.fill()
  await page.fill('#username', 'tomsmith');

  // Enter password → page.fill()
  await page.fill('#password', 'SuperSecretPassword!');

  // Click login button → page.click()
  await page.click('button[type="submit"]');

  // Verify login success → expect()
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

  // Simulate session timeout → clear browser cookies
  await context.clearCookies();

  // Try to open protected page again
  await page.goto('https://the-internet.herokuapp.com/secure');

  // Verify user is redirected to login page
  await expect(page).toHaveURL(/login/);

  // Verify login form is visible again
  await expect(page.locator('#username')).toBeVisible();
  await page.waitForTimeout(5000)


});