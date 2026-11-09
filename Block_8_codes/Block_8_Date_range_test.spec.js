//Test 58 
const { test, expect } = require('@playwright/test');

test('Date Range selection test ', async ({ page }) => {
  // Open recruiter website
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Enter username
  await page.locator('input[type="text"], input[type="email"]').first().fill('mehedi595');

  // Enter password
  await page.locator('input[type="password"]').fill('password');

  // Click Login button
  await page.getByRole('button', { name: /login|sign in/i }).click();

  // Wait for dashboard/home page after login
  await page.waitForLoadState('networkidle');

  // Verify login success
  await expect(page).not.toHaveURL(/login|signin/i);
  await page.locator('.container-header-icon').first().click();
  await page.waitForTimeout(2000);
// Click on 1
await page.getByText('1', { exact: true }).first().click();

// Click on 15
await page.getByText('15', { exact: true }).first().click();
await page.waitForTimeout(3000)
});
