

const { test, expect } = require('@playwright/test');
test.setTimeout(40000);
test('Close popup first, then double-click and right-click on bdjobs.com', async ({ page }) => {
  // Visit bdjobs.com
  await page.goto('https://www.bdjobs.com/', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForTimeout(3000);

  // Close popup first
  const popupCloseButton = page.locator(
    'button.close, .close, .btn-close, button:has-text("×"), [aria-label="Close"]'
  ).first();

  if (await popupCloseButton.isVisible().catch(() => false)) {
    await popupCloseButton.click();
    await page.waitForTimeout(2000);
  }

  // Double-click test on search input
  const searchInput = page.locator('input[type="text"]').first();

  await expect(searchInput).toBeVisible();
  await searchInput.click();
  await page.waitForTimeout(1000);

  await searchInput.fill('Software QA Engineer');
  await page.waitForTimeout(1000);

  await searchInput.dblclick();
  await page.waitForTimeout(3000);

  // Right-click test on first visible link
  const firstLink = page.locator('a[href]').first();

  await expect(firstLink).toBeVisible();
  await page.waitForTimeout(1000);

  await firstLink.click({
    button: 'right'
  });

  await page.waitForTimeout(3000);
});