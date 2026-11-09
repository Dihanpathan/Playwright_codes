
//TEST 63

const { test, expect } = require('@playwright/test');

test(' login verification with invalid credential ', async ({ page }) => {

  // Open website → page.goto()
  await page.goto('https://recruiter.bdjobs.com');

  // Enter username → page.fill()
  // Selector used: placeholder selector
  await page.fill('input[placeholder="Enter your username"]', 'Test_user');

  // Enter password → page.fill()
  // Selector used: placeholder selector
  await page.fill('input[placeholder="Enter your password"]', 'Pass');

  // Click login button → page.click()
  // Selector used: text selector
  await page.click('button:has-text("Sign in")');

  // Wait for page load → page.waitForLoadState()
  await page.waitForLoadState('networkidle');

  // Verify login success → expect()
  // Check URL changed (not login page)
  await expect(page).not.toHaveURL(/login/);

});

