const { test, expect } = require('@playwright/test');

test('Pagination test on recruiter page', async ({ page }) => {
  await page.goto('https://bdjobs.com/h/jobs?JobType=new', {
    waitUntil: 'domcontentloaded'
  });

  // Wait for page app content to load
  await page.waitForTimeout(5000);

  // Locate visible Next button inside main content
  const nextButton = page
    .getByRole('main')
    .getByRole('button', { name: 'Next' });

  // Wait until Next button is available
  await expect(nextButton).toBeVisible({ timeout: 15000 });

  // Click Next button
  await nextButton.click();

  // Wait to observe page change
  await page.waitForTimeout(3000);
});
