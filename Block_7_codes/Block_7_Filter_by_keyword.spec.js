//Filter by keyword 

const { test, expect } = require('@playwright/test');

test('filter by keyword on Wikipedia', async ({ page }) => {
  const keyword = 'Bangladesh';

  await page.goto('https://www.wikipedia.org/');

  await page.fill('input[name="search"]', keyword);
  await page.press('input[name="search"]', 'Enter');

  await expect(page.locator('#firstHeading')).toContainText(keyword);
});