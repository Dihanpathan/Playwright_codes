
//Test 88 Download on recruiter 

const { test, expect } = require('@playwright/test');

test('PDF link test on recruiter.bdjobs.com', async ({ page }) => {
  // Open site
  await page.goto('https://recruiter.bdjobs.com/', { waitUntil: 'networkidle' });

  // Login
  await page.locator('input[type="text"], input[type="email"]').first().fill('mehedi595');
  await page.locator('input[type="password"]').fill('a');
  await page.getByRole('button', { name: /login|sign in/i }).click();
 await page.waitForTimeout(2000)
  await page.goto('https://recruiter.bdjobs.com/RecruiterAccount/billings')
  // Wait after login
  await page.waitForLoadState('networkidle');

  // Open dropdown and click Billings
 await page.goto('https://recruiter.bdjobs.com/RecruiterAccount/billings')

  // Locate PDF link
  const pdfLink = page.locator('a[href*="NBR-issued-Tax-Exemption-Certificate.pdf"]');

  // Verify PDF link exists
  await expect(pdfLink).toBeVisible();

  // Click PDF link and verify new page opens
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    pdfLink.click()
  ]);

  // Verify PDF URL
  await expect(newPage).toHaveURL(/NBR-issued-Tax-Exemption-Certificate\.pdf/);
  await page.waitForTimeout(5000);
});