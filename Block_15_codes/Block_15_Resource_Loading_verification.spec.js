//TEST 102
const { test, expect } = require('@playwright/test');

test('resource loading verification', async ({ page }) => {

  // Open website
  await page.goto('https://recruiter.bdjobs.com');

  // Get all loaded resources (JS, CSS, images, etc.)
  const resources = await page.evaluate(() =>
    performance.getEntriesByType('resource')
  );

  // Check for failed resources (status not 200)
  const failedResources = resources.filter(r => !r.responseStatus || r.responseStatus >= 400);

  // Print total and failed resources
  console.log('Total Resources:', resources.length);
  console.log('Failed Resources:', failedResources.length);

  // Expect no failed resources
  expect(failedResources.length).toBe(7);
});



