//TEST 14

import { test, expect } from '@playwright/test';

test('Check and uncheck checkbox test', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page', {
    waitUntil: 'domcontentloaded'
  });

  //  checkbox: "Keep me logged in"
  const keepLoggedInCheckbox = page.locator('#wpRemember');

  // Verify checkbox exists
  await expect(keepLoggedInCheckbox).toBeVisible();

  // Check the checkbox
  await keepLoggedInCheckbox.check();
  await expect(keepLoggedInCheckbox).toBeChecked();
  await page.waitForTimeout(3000);
  // Uncheck the checkbox
  await keepLoggedInCheckbox.uncheck();
  await expect(keepLoggedInCheckbox).not.toBeChecked();
  await page.waitForTimeout(3000)
});