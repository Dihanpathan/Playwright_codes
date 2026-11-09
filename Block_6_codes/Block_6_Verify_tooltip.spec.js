//TEST 45 
const { test, expect } = require('@playwright/test');

test('verify tooltip', async ({ page }) => {
  // Open website
  await page.goto('https://bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Locate element that has tooltip
  const tooltipElement = page.locator('[title]').first();

  // Verify element is visible
  await expect(tooltipElement).toBeVisible();

  // Hover on element
  await tooltipElement.hover();

  // Get tooltip text from title attribute
  const tooltipText = await tooltipElement.getAttribute('title');

  // Verify tooltip text exists
  expect(tooltipText).toBeTruthy();

  // Verify tooltip text is not empty
  expect(tooltipText.trim().length).toBeGreaterThan(0);
});