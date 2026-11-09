//Test 116

// Import Playwright
const { test, expect } = require('@playwright/test');

// Test for LocalStorage
test('LocalStorage test', async ({ page }) => {

  // Open website
  await page.goto('https://recruiter.bdjobs.com/');

  // Save data in LocalStorage
  await page.evaluate(() => localStorage.setItem('name', 'John'));
  await page.waitForTimeout(2000);

  // Get data from LocalStorage
  const value = await page.evaluate(() => localStorage.getItem('name'));
  await page.waitForTimeout(2000)

  // Check if value is correct
  expect(value).toBe('John');

});