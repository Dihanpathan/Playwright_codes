//test 117
// Import Playwright
const { test, expect } = require('@playwright/test');

// Test for SessionStorage
test('SessionStorage test', async ({ page }) => {
 
  // Open website
  await page.goto('https://recruiter.bdjobs.com/dashboard');
  await page.waitForTimeout(2000)

  // Save data in SessionStorage
  await page.evaluate(() => sessionStorage.setItem('status', 'active'));

  // Get data from SessionStorage
  const value = await page.evaluate(() => sessionStorage.getItem('status'));
  await page.waitForTimeout(2000)
  // Check if value is correct
  expect(value).toBe('active');

});
