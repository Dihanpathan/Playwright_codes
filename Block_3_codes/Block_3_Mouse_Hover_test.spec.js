//Mouse hover test 

const { test, expect } = require('@playwright/test');

test('Mouse hover test ', async ({ page }) => {
  test.setTimeout(40000);

  await page.goto('https://www.bdjobs.com/', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForTimeout(3000);

  // Close popup
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);

  // Hover on first link
  const firstLink = page.locator('a[href]').first();

  await expect(firstLink).toBeVisible();
  await firstLink.hover();

  await page.waitForTimeout(5000);
});