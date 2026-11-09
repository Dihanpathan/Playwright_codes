//TEST 8
// 
const { test, expect } = require('@playwright/test');
test('Back & Forward', async ({ page }) => {

  // Step 1: Navigate to the Bdjobs recruiter homepage
  await page.goto('https://recruiter.bdjobs.com/');

  // Step 2: Click on the first available link (<a> tag)
  // This simulates navigating to another page
  await page.click('Enter your Password'); 

  // Step 3: Store the new URL after navigation
  const url = page.url();

  // Step 4: Navigate back to the previous page
  await page.goBack();

  // Step 5: Verify that the URL is no longer the second page
  // This confirms that back navigation worked
  await expect(page).not.toHaveURL(url);

  // Step 6: Navigate forward again
  await page.goForward();

  // Step 7: Verify that the URL matches the previously stored URL
  // This confirms that forward navigation worked
  await expect(page).toHaveURL(url);

});
