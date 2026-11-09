
const { test, expect } = require('@playwright/test');

test('Session Persistence test', async ({ page }) => {

  // Login to recruiter 
  await page.goto('https://recruiter.bdjobs.com');
  await page.fill('input[placeholder="Enter your username"]', 'user1');
  await page.fill('input[placeholder="Enter your password"]', 'password');
  await page.click('button:has-text("Sign in")'); 

  await page.waitForTimeout(5000)
  // Reload page
  await page.reload();

  // Verify user is still logged in
  await page.waitForTimeout(3000)
  await expect(page).toHaveURL(/dashboard/);

});
