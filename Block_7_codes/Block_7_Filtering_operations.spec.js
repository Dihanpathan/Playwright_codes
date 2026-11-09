//Test 52 - Filtering operations

const { test, expect } = require('@playwright/test');

test.setTimeout(60000);

test('Filter jobs by keyword "sqa" on bdjobs', async ({ page }) => {
  // Visit jobs page
  await page.goto('https://bdjobs.com/h/jobs?lang=en', {
    waitUntil: 'networkidle'
  });

  // Locate keyword search input
  const keywordInput = page.locator('input[type="text"]').first();

  // Verify keyword input is visible
  await expect(keywordInput).toBeVisible();

  // Enter keyword
  await keywordInput.fill('sqa');

  // Press Enter to search
  await keywordInput.press('Enter');

  // Wait for results to load
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);

  // Verify keyword remains in the search field
  await expect(keywordInput).toHaveValue('sqa');


  // Verify page shows search result content
  await expect(page.locator('body')).toContainText(/sqa|software quality|quality assurance/i);
});
