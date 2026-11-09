//TEST 11

const { test, expect } = require('@playwright/test');
test('Text input verify', async ({ page }) => {
  await page.goto('https://recruiter.bdjobs.com');

  // Locate the username input field using its placeholder and enter a  username

  await page.fill('input[placeholder="Enter your username"]', 'mehedi595');

  // Verify that the input field contains the expected value

  // This ensures that the text was entered correctly

  await expect(page.locator('input[placeholder="Enter your username"]')).toHaveValue('mehedi595');

  //Wait for 5 seconds (used here for observation)
  
  await page.waitForTimeout(5000);

});