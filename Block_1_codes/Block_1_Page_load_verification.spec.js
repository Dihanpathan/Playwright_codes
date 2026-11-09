const { test, expect } = require('@playwright/test');

test('Page load completion verification', async ({ page }) => {

  // Step 1: Navigate to the Bdjobs recruiter homepage
  await page.goto('https://recruiter.bdjobs.com');

  // Step 2: Wait until the page load event is fired (all resources loaded)
  await page.waitForLoadState('load');

  // Step 3: Verify that a specific text is visible on the page
  // This ensures the page has loaded correctly and key content is displayed

  await expect(page.locator('text=Ready to hire your next talent?')).toBeVisible();

});