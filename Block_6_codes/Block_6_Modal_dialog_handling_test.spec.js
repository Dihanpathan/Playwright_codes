//Test  44

const { test, expect } = require('@playwright/test');

test(' Modal/dialog handling test', async ({ page }) => {
  // Open recruiter.bdjobs.com
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Enter username
  await page.locator('input[type="text"], input[type="email"]').first().fill('mehedi595');

  // Enter password
  await page.locator('input[type="password"]').fill('a');

  // Click login/sign in button
  await page.getByRole('button', { name: /login|sign in/i }).click();

  // Verify login success by checking URL changed from login page
  await expect(page).not.toHaveURL(/login|signin/i);
  await page.waitForTimeout(4000)
  await page.locator('img[src="assets/images/user-hired.svg"]').nth(1).click();
  await page.waitForTimeout(2000)
  const modal = page.locator('[role="dialog"], .modal, .modal-content').first();

await expect(modal).toBeVisible();
});

