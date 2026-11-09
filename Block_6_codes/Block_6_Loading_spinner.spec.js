//TEST 47
const { test, expect } = require('@playwright/test');

test(' loading spinner on recruiter.bdjobs.com ', async ({ page }) => {
  // Open recruiter.bdjobs.com login page
  await page.goto('https://recruiter.bdjobs.com/');

  // Enter username
  await page.locator('input[type="text"], input[type="email"]').first().fill('dihan595');

  // Enter password
  await page.locator('input[type="password"]').fill('a');

  // Click Login button
  await page.getByRole('button', { name: /login|sign in/i }).click();

  // Locate loading spinner/loader
  const spinner = page.locator(
    '.spinner, .loader, .loading, .ngx-spinner, .spinner-border, [role="progressbar"]'
  ).first();

  // Verify spinner appears
  await expect(spinner).toBeVisible({ timeout: 5000 });
});
