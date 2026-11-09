
const { test, expect } = require('@playwright/test');

test(' aria label check', async ({ page }) => {
  await page.goto('https://recruiter.bdjobs.com/');

  const ariaElement = page.locator('[aria-label]').first();

  await expect(ariaElement).toBeVisible();

  const ariaLabel = await ariaElement.getAttribute('aria-label');

  expect(ariaLabel).toBeTruthy();
});