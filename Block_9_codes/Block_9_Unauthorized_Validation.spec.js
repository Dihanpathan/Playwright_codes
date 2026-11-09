
const { test, expect } = require('@playwright/test');

test('Unauthorized validation', async ({ page }) => {

  // Open login page
  await page.goto('https://recruiter.bdjobs.com');

  // Login
  await page.fill('input[placeholder="Enter your username"]', 'Username');
  await page.fill('input[placeholder="Enter your password"]', 'Pass');
  await page.click('button:has-text("Sign in")');

  // Wait for dashboard
  await page.waitForLoadState('networkidle');

  // Navigate to restricted page
  await page.goto('https://recruiter.bdjobs.com/recruitment-center/applicants?jobno=14643');

  // Wait for page load
  await page.waitForLoadState('networkidle');

  // Locate unauthorized image → using src attribute
  const unauthorizedImg = page.locator('img[src*="unauthorized.svg"]');
  await page.waitForTimeout(1000);

  // Verify image is visible
  await expect(unauthorizedImg).toBeVisible();

});