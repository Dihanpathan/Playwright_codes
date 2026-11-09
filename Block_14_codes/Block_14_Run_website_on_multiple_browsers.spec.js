//TEST 94

const { test, expect } = require("@playwright/test");

test("open bdjobs recruiter site on multiple browser ", async ({ page }) => {

  // Open the website
  await page.goto("https://recruiter.bdjobs.com");

  // Wait so you can see the page
  await page.waitForTimeout(3000);

  // Verify page loaded (URL check)
  await expect(page).toHaveURL(/bdjobs/);

});

//command: npx playwright test "Block_14_Run_website_on_multiple_browsers.spec.js" --project=chromium --project=firefox --project=webkit --headed --workers=3 