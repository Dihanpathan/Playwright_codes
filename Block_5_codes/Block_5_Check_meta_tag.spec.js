//Test 38

const { test, expect } = require('@playwright/test');

test('check meta tags on recruiter.bdjobs.com', async ({ page }) => {
  // Go to recruiter.bdjobs.com website
  await page.goto('https://recruiter.bdjobs.com/');

  // Locate meta description tag
  const metaDescription = page.locator('meta[name="description"]');

  // Verify meta description tag has content
  await expect(metaDescription).toHaveAttribute('content', /.+/);

  // Locate meta viewport tag
  const metaViewport = page.locator('meta[name="viewport"]');

  // Verify viewport meta tag contains width=device-width
  await expect(metaViewport).toHaveAttribute('content', /width=device-width/i);
   console.log('Meta description tag validation passed');
});
