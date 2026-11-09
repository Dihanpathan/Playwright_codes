//TEST 12

const { test, expect } = require('@playwright/test');

test('dropdown selection on wikipedia', async ({ page }) => {
  // Open Wikipedia homepage
  await page.goto('https://www.wikipedia.org/');
  await page.waitForTimeout(2000);
  // Find the language dropdown
  const dropdown = page.locator('#searchLanguage');

  // Select Bangla language
  await dropdown.selectOption('bn');

  // Verify Bangla is selected
  await expect(dropdown).toHaveValue('bn');

  // Type search keyword
  await page.locator('#searchInput').fill('Bangladesh');

  // Click search button
  await page.locator('button[type="submit"]').click();

  // Verify user is redirected to Bangla Wikipedia
  await expect(page).toHaveURL(/bn\.wikipedia\.org/);
});
