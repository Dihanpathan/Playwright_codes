//TEST 16


import { test } from '@playwright/test';

test('Fill dynamic form fields', async ({ page }) => {
  await page.goto('https://github.com/login');
  
  await page.locator('#login_field').fill('test@example.com');
  await page.waitForTimeout(2000)
  await page.locator('#password').fill('test_password');
  await page.waitForTimeout(2000)
});
