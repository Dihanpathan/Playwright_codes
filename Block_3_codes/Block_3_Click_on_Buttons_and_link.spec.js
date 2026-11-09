//TEST 19

const { test, expect } = require('@playwright/test');

test('Recruiter click on link and buttons test', async ({ page }) => {
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForTimeout(2000);

  // Click the 2nd href/link on the page
  const secondHref = page.locator('a[href]').nth(1);

  await expect(secondHref).toBeVisible();
  await page.waitForTimeout(1000);

  await secondHref.click();

  await page.waitForTimeout(3000);

  // Go back to previous page
  await page.goBack({
    waitUntil: 'domcontentloaded'
  });

  await page.waitForTimeout(2000);

  // Enter username
  await page.getByPlaceholder('Enter your username').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Enter your username').fill('mehedi595');

  await page.waitForTimeout(2000);

  // Enter password
  await page.getByPlaceholder('Enter your password').click();
  await page.waitForTimeout(1000);
  await page.getByPlaceholder('Enter your password').fill('Password');

  await page.waitForTimeout(2000);

  // Click Sign in button
  await page.getByRole('button', { name: /^sign in$/i }).click();
  await page.waitForTimeout(3000);
});

/*
import { test } from '@playwright/test';

test('click action in forgot password link', async ({ page }) => {

  await page.goto('https://recruiter.bdjobs.com/');

  // Selector used: text selector (text=Forget username or password?)

  await page.click('text=Forgot username or password?');

  await page.waitForTimeout(2000);

});

*/