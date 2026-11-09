//Test 33
/*
const { test, expect } = require('@playwright/test');

test('verify element presence', async ({ page }) => {
  await page.goto('https://recruiter.bdjobs.com/');

  // Verify logo or homepage element is present
  const logo = page.locator('img').first();

  await expect(logo).toBeAttached();
  await expect(logo).toBeVisible();

  console.log('Element is present and visible without login');
});
*/

//Element presense

const { test, expect } = require('@playwright/test');

test('check presence "Sign in" button', async ({ page }) => {

  // Navigate to URL

  await page.goto('https://recruiter.bdjobs.com');

  // Locate element → page.locator()
  // Selector used: text selector (text=Sign)

  const signIn = page.locator('text=Sign');

  // Wait for element → .waitFor() method
  // State: 'visible'

  await signIn.first().waitFor({ state: 'visible' });

  // Assertion → expect()
  // Method: toBeVisible() → verifies element is visible

  await expect(signIn.first()).toBeVisible();

});
