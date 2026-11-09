//Test 112
//Visual regression testing ensures that UI changes are intentional by comparing current UI with a baseline screenshot.

const { test, expect } = require('@playwright/test');

// Test for visual regression
test('visual regression detection', async ({ page }) => {

  // Open bdjobs website
  await page.goto('https://recruiter.bdjobs.com/', { waitUntil: 'load' });

  // Wait for dynamic content to finish loading
  await page.waitForTimeout(2000);

  // Disable animations to make screenshot stable
  await page.addStyleTag({
    content: `* { animation: none !important; transition: none !important; }`
  });

  // Compare current screenshot with saved baseline screenshot
  await expect(page).toHaveScreenshot('visual-homepage.png', {
    maxDiffPixelRatio: 0.02
  });

});