//Test 53 ROw selection

const { test, expect } = require('@playwright/test');

test.setTimeout(60000);

test('filter jobs by row selection', async ({ page }) => {
  // Visit jobs page
  await page.goto('https://bdjobs.com/h/jobs?lang=en', {
    waitUntil: 'networkidle'
  });

  // Locate row selection dropdown
  const rowDropdown = page.locator('select').first();

  // Verify dropdown is visible
  await expect(rowDropdown).toBeVisible();

  // Select 75 rows
  await rowDropdown.selectOption({ label: '75' });
  await page.waitForLoadState('networkidle');

  // Verify 75 is selected
  await expect(rowDropdown).toHaveValue('5: 75');

  // Select 30 rows
  await rowDropdown.selectOption({ label: '30' });
  await page.waitForLoadState('networkidle');

  // Verify 30 is selected
  await expect(rowDropdown).toHaveValue('2: 30');
});
