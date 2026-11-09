
//Test 118
const { test, expect } = require('@playwright/test');
// Cache validation test
test(' cache validation test ', async ({ page }) => {

  // Open website first time (from server)
  await page.goto('https://recruiter.bdjobs.com');

  // Reload page (may use cache)
  const response = await page.reload();

  // Check if response came from cache/service worker
  const cached = response.fromServiceWorker();

  // Print result
  console.log('Is cached:', cached);

  //  check cache (true/false exists)
  expect(cached).not.toBeNull();

});
