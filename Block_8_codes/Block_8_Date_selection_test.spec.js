//TEST 57

const { test, expect } = require('@playwright/test');

test('Date selection test on recruiter ', async ({ page }) => {
  // Open recruiter website
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Enter username
  await page.locator('input[type="text"], input[type="email"]').first().fill('mehedi595');

  // Enter password
  await page.locator('input[type="password"]').fill('Password');

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

// Click someewhere else 
await page.mouse.click(100, 100);
await page.waitForTimeout(3000)
});
