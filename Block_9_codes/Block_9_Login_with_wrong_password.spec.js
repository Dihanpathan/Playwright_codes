//
const { test, expect } = require('@playwright/test');

test('Login with wrong password --> validation', async ({ page }) => {

  // Open website → page.goto()
  await page.goto('https://recruiter.bdjobs.com');

  // Enter valid username → page.fill()
  await page.fill('input[placeholder="Enter your username"]', 'user1');

  // Enter wrong password → page.fill()
  await page.fill('input[placeholder="Enter your password"]', '1234');

  // Click login → page.click()
  await page.click('button:has-text("Sign in")');

  // Wait for response → page.waitForLoadState()
  await page.waitForLoadState('networkidle');

  // Verify error message → expect()
  // Selector used: text selector (adjust if needed based on UI)
  await expect(page.locator('text=Invalid Credentials.')).toBeVisible();

  // Optional wait → for observation
  await page.waitForTimeout(3000);
});