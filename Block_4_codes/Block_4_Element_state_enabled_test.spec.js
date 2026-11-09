//TEST 32
 
const { test, expect } = require('@playwright/test');

test('Element state enabled test', async ({ page }) => {
  // Open recruiter website
  await page.goto('https://recruiter.bdjobs.com/');

  // Locate username field
  const usernameField = page.getByPlaceholder('Enter your username');

  // Check username field is enabled
  await expect(usernameField).toBeEnabled();

  // Locate password field
  const passwordField = page.getByPlaceholder('Enter your password');

  // Check password field is enabled
  await expect(passwordField).toBeEnabled();

  // Locate Sign in button
  const signInButton = page.getByRole('button', { name: /^sign in$/i });

  // Check Sign in button is enabled
  await expect(signInButton).toBeEnabled();
  await page.waitForTimeout(2000)
});
