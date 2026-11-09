//Test 101

const { test, expect } = require('@playwright/test');

test('memory leak detection check', async ({ page }) => {

  // Open website
  await page.goto('https://recruiter.bdjobs.com');

  // Capture initial memory usage
  const before = await page.evaluate(() => performance.memory.usedJSHeapSize);

  // Repeat reload to simulate user activity
  for (let i = 0; i < 5; i++) {
    // Iteration 1 → first reload
    // Iteration 2 → second reload
    // Iteration 3 → third reload
    // Iteration 4 → fourth reload
    // Iteration 5 → fifth reload
    await page.reload(); // reload page each time
  }
 // Capture memory after actions
  const after = await page.evaluate(() => performance.memory.usedJSHeapSize);

  // Log memory values
  console.log({ before, after });

  // Check memory increase is within limit
  expect(after - before).toBeLessThan(60 * 1024 * 1024); // <60MB
});
