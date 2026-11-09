//TEST 37

const { test, expect } = require('@playwright/test');

test('validate recruiter.bdjobs.com URL', async ({ page }) => {
  await page.goto('https://recruiter.bdjobs.com/');

  // Verify current page URL
  await expect(page).toHaveURL('https://recruiter.bdjobs.com/');

  console.log('URL validation passed');
});
