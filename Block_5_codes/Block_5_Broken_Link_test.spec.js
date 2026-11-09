//TEST 39
const { test, expect } = require('@playwright/test');

test('Broken link 404 page check', async ({ page }) => {
  await page.goto('https://bdjobs.com/nopage');

  await page.waitForTimeout(2000);

  await expect(page).toHaveURL('https://bdjobs.com/nopage');
  await expect(page.getByText('404', { exact: true })).toBeVisible();
  await page.waitForTimeout(3000);
});
