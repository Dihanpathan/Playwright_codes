//Test 33

const { test, expect } = require('@playwright/test');

test('login,and check element  is disabled', async ({ page }) => {
  await page.goto('https://recruiter.bdjobs.com/');

  // Login
  await page.locator('input[type="text"], input[type="email"]').first().fill('mehedi595');
  await page.locator('input[type="password"]').fill('Pass');
  await page.getByRole('button', { name: /login|sign in/i }).click();

  await page.waitForLoadState('networkidle');

  // Click first job title
  await page.getByText('Graphic Designer', { exact: true }).click();

  //await expect(jobTitle).toBeVisible();
  //await jobTitle.click();

  await page.waitForLoadState('networkidle');

  // Click target button
  const targetButton = page.locator(
    'button.py-1.relative.ps-10.pe-4.inline-flex.items-center.justify-between'
  ).first();

  await expect(targetButton).toBeVisible();
  await expect(targetButton).toBeEnabled();
  await targetButton.click();
  await page.waitForTimeout(3000)
  const disabledButton = page.locator(
  'button.px-3.py-1.text-\\[\\#b32d7d\\].border.border-\\[\\#b32d7d\\].rounded-md'
);

await expect(disabledButton).toBeDisabled();
await page.waitForTimeout(3000)
});