//TEST 36

import { test, expect } from '@playwright/test';

test('verify title ', async ({ page }) => {

  // Navigate to URL → page.goto() method
  await page.goto('https://recruiter.bdjobs.com/');

  // Assertion → expect()
  // Method: toHaveTitle() → verifies page title using regex

  await expect(page).toHaveTitle(/Bdjobs Recruiter/);

  // Static wait → page.waitForTimeout() 

  await page.waitForTimeout(3000);

});