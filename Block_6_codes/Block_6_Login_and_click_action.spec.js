//TEST 46

const { test, expect } = require('@playwright/test');

test('login, open  applicants list, and click Online Test', async ({ page }) => {
  // Open website
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Enter username
  await page.locator('input[type="text"], input[type="email"]').first().fill('mehedi595');

  // Enter password
  await page.locator('input[type="password"]').fill('test');

  // Click Login button
  await page.getByRole('button', { name: /login|sign in/i }).click();

  // Wait for dashboard page
  await page.waitForLoadState('networkidle');

  // Click Graphic Designer job title
  const graphicDesignerTitle = page.getByText('Cybersecurity Analyst', { exact: true }).first();

  await expect(graphicDesignerTitle).toBeVisible();
  await graphicDesignerTitle.click();

  // Wait for applicant list page
  await page.waitForLoadState('networkidle');

  // Click Online Test for Dihan test update applicant
  await page
    .locator('applicant-list, app-applicant-card, .card, .row')
    .filter({ hasText: 'Dihan test update' })
    .getByText('Online Test', { exact: true })
    .click();

// Verify success toast appears after clicking Online Test
const toast = page.locator(
  '.toast, .snackbar, .alert, .notification, [role="alert"], .toast-message'
).filter({
  hasText: /Successfully create Step and Applicant Inserted/i
});

await expect(toast).toBeVisible();
await expect(toast).toContainText('Successfully create Step and Applicant Inserted');
});