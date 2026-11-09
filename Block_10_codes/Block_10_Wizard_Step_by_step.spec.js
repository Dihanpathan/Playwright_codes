//Test 69
 
const { test, expect } = require('@playwright/test');

test.setTimeout(80000);

test('wizard step by step test on recruiter.bdjobs.com', async ({ page }) => {
  // Open recruiter website
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Login
  await page.locator('input[type="text"], input[type="email"]').first().fill('user1');
  await page.locator('input[type="password"]').fill('Pass');
  await page.getByRole('button', { name: /login|sign in/i }).click();

  // Wait after login
  await page.waitForLoadState('networkidle');

  // Click Graphic Designer job
  const graphicDesignerTitle = page.getByText('Cybersecurity Analyst', { exact: true }).first();
  await expect(graphicDesignerTitle).toBeVisible();
  await graphicDesignerTitle.click();

  // Wait for page to load
  await page.waitForLoadState('networkidle');

 // Click Online Test for Dihan test update applicant
const onlineTestButton = page
  .locator('span.text-\\[10\\.5px\\]', { hasText: 'Online Test' })
  .nth(1)
  .locator('xpath=ancestor::button[1]');

await expect(onlineTestButton).toBeVisible();

await onlineTestButton.evaluate((button) => button.click());
await page.waitForTimeout(1000)
 // Verify toast / popup / text is visible on the page
const successMessage = page.getByText('Successfully create Step and Applicant Inserted', {
  exact: true
});

await expect(successMessage).toBeVisible();

  // Verify Step content exists
  await expect(page.locator('body')).toContainText(/step|online test|applicant/i);
});
