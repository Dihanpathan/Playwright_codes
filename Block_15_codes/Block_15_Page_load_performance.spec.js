
const { test, expect } = require('@playwright/test');

// Test to check page load performance
test('page load performance test', async ({ page }) => {

  // Open the website and wait until everything is fully loaded
  await page.goto('https://recruiter.bdjobs.com', {  waitUntil: 'load'});

  // Run code and  the browser to get performance data
  const performanceTiming = await page.evaluate(() => {

    // Get page load timing information
    const nav = performance.getEntriesByType('navigation')[0];

    return {
      // Time taken for HTML (DOM) to load
      domContentLoaded: nav.domContentLoadedEventEnd,

      // Time taken for full page (images, CSS, JS) to load
      loadComplete: nav.loadEventEnd,

      // Time taken for server to respond
      responseTime: nav.responseEnd - nav.requestStart,

      // Total data downloaded (in bytes)
      transferSize: nav.transferSize
    };
  });

  // Show performance data in console
  console.log('Performance Timing:', performanceTiming);

  // Check if performance is within acceptable limits

  // DOM should load within 3 seconds
  expect(performanceTiming.domContentLoaded).toBeLessThan(3000);

  // Full page should load within 7 seconds
  expect(performanceTiming.loadComplete).toBeLessThan(7000);

  // Server should respond within 1.5 seconds
  expect(performanceTiming.responseTime).toBeLessThan(1500);
});