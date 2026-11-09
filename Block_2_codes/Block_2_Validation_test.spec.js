//Test 16


import { test, expect } from '@playwright/test';

test('Validation test', async ({ page }) => {
  await page.goto(
    'https://gateway.bdjobs.com/jobseeker-panel/create-account/create-account-form?type=w',
    { waitUntil: 'domcontentloaded' }
  );

  // Fill invalid email
  await page.locator('input[placeholder="Email Address"]').fill('wrongemail');
  await page.waitForTimeout(1000);
  // Fill invalid mobile number
  await page.locator('input[placeholder*="Phone"]').fill('12345');
    await page.waitForTimeout(1000);
  // Select username as Email
  await page.getByText('Email', { exact: true }).click();
  await page.waitForTimeout(1000);
  // Fill invalid password
  await page.locator('input[placeholder="Password"]').fill('123');
  await page.waitForTimeout(1000);
  // Fill mismatched retype password
  await page.locator('input[placeholder="Retype Password"]').fill('456');
  await page.waitForTimeout(1000);
  // Click outside to trigger validation
  await page.locator('body').click();

  // Validate error messages
  await expect(page.getByText('Please enter a valid email address.')).toBeVisible();
  await expect(page.getByText('Mobile number must be exactly 11 digits.')).toBeVisible();
  await expect(page.getByText('Password must be at least 8 characters.')).toBeVisible();
  await expect(page.getByText('Passwords do not match.')).toBeVisible();
  await page.waitForTimeout(3000);
});