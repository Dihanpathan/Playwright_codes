//Test 111

// Import Playwright test and expect methods
const { test, expect } = require('@playwright/test');

// Test case for screenshot comparison of recruiter.bdjobs.com header area
test('Screenshot comparison for recruiter header area', async ({ page }) => {

  // Set fixed browser viewport size
  // This helps avoid screenshot mismatch due to different screen sizes
  await page.setViewportSize({
    width: 1366,
    height: 768
  });

  // Open recruiter.bdjobs.com website
  // domcontentloaded waits until the HTML document is loaded
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'domcontentloaded'
  });

  // Add custom CSS before taking screenshot
  // This makes the page more stable for visual comparison
  await page.addStyleTag({
    content: `
      /* Always show vertical scrollbar to avoid width mismatch */
      /*html {
        overflow-y: scroll !important;
      }

      /* Remove default body margin */
      /*body {
        margin: 0 !important;
      }

      /* Disable animation and transition to avoid visual flakiness */
    /*  * {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }
    `
  });


  // Locate the first header element and check that it is visible
  await expect(page.locator('header').first()).toBeVisible();

  // Take screenshot of only the header area and compare with baseline image
  await expect(page).toHaveScreenshot('recruiter-header-area.png', {

    // Capture fixed area from the top-left corner of the page
    clip: {
      x: 0,
      y: 0,
      width: 1366,
      height: 64
    },

    // Allow up to 5% pixel difference
    // Useful for real websites because small rendering differences can happen
    maxDiffPixelRatio: 0.05
  });
});
