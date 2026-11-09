// test 70 

const { test, expect } = require('@playwright/test');

test('shopping cart --> service package .bdjobs.com', async ({ page }) => {
  // Open recruiter website
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Click Service Package button
await page.locator('.btn.custom-service-btn').click();
await page.waitForTimeout(2000)
await page.getByRole('button', {name: /SMS/i}).click();
await page.waitForTimeout(2000);
await page.getByRole('button', { name: /Place Order/i }).click();
await page.waitForTimeout(2000);
});