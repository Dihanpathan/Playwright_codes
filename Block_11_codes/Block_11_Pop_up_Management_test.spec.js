//TEST 78

const { test, expect } = require('@playwright/test');

test('Already exists pop up mangement test ', async ({ page }) => {
  // Open recruiter website
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Enter username
  await page.locator('input[type="text"], input[type="email"]').first().fill('username');

  // Enter password
  await page.locator('input[type="password"]').fill('password');

  // Click Login button
  await page.getByRole('button', { name: /login|sign in/i }).click();

  // Wait after login
  await page.waitForLoadState('networkidle');

  // Verify login success
  await expect(page).not.toHaveURL(/login|signin/i);
await page.waitForTimeout(2000);
const CybersecurityAnalystJob = page.getByText('Cybersecurity Analyst', { exact: true }).first();

await expect(CybersecurityAnalystJob).toBeVisible();

await CybersecurityAnalystJob.click();

await page.waitForLoadState('networkidle');
await page.waitForTimeout(3000)
 // Click Online Test for Dihan test update applicant
const onlineTestButton = page
  .locator('span.text-\\[10\\.5px\\]', { hasText: 'Online Test' })
  .nth(1)
  .locator('xpath=ancestor::button[1]');

await expect(onlineTestButton).toBeVisible();

await onlineTestButton.evaluate((button) => button.click());
await page.waitForTimeout(1000)
 // Verify toast / popup / text is visible on the page
const successMessage = page.getByText('Already Exist But Not Scheduled', {
  exact: true
});

await expect(successMessage).toBeVisible();

  // Verify Step content exists
  await expect(page.locator('body')).toContainText(/step|online test|applicant/i);

});
