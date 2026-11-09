
//test 89 upload on recruiter payment documents 
/*
const { test, expect } = require('@playwright/test');
const path = require('path');

test.setTimeout(80000);

test('upload file on recruiter.bdjobs.com', async ({ page }) => {
  // File path
  const filePath = path.resolve(
    'F:/project/Playwright_automation_VScode_Extention/bdjobs-file.pdf'
  );

  // Open recruiter site
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Login
  await page.locator('input[type="text"], input[type="email"]').first().fill('TestuSer');
  await page.locator('input[type="password"]').fill('Password');
  await page.getByRole('button', { name: /login|sign in/i }).click();

  // Wait after login
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(6000)
  // Click Processing tab
  await page.locator('a.nav-link', { hasText: 'Processing' }).click();

  // Click Pay Now
  await page.locator('.btn.btn-success.btn-sm.btn-pay-online.paynow').first().click();
  await page.waitForTimeout(2000)
  
  // Select offline payment
  //await page.locator('#offlinePaymentInfo').click();
  await page.getByText('Upload Payment Documents').click();
  // Click Browse button if needed

 await page.waitForTimeout(4000)

});

*/

//TEST 89  demo page
import { test, expect } from '@playwright/test';
// Import Node.js path module → used for file path handling
import path from 'path';

// Define test using Playwright test() method
test('Verify Upload file  ', async ({ page }) => {

  // Navigate to URL 

  await page.goto('https://the-internet.herokuapp.com/upload');

  // Create file path → path.join() method
  // process.cwd() → gets current working directory

  const filePath = path.join(process.cwd(), 'tests/data/sample2.txt');

  // Upload file → page.setInputFiles() method
  // Selector used: ID selector (#file-upload)

  await page.setInputFiles('#file-upload', filePath);

  // Static wait → page.waitForTimeout() 

  await page.waitForTimeout(3000);

  // Click action → page.click() method
  // Selector used: ID selector (#file-submit)

  await page.click('#file-submit');

  // Assertion → expect() with locator()
  // Selector used: tag selector (h3)
  // Method: toHaveText() → verifies heading text

  await expect(page.locator('h3')).toHaveText('File Uploaded!');

  // Assertion → expect() with locator()
  // Selector used: ID selector (#uploaded-files)
  // Method: toHaveText() → verifies uploaded file name

  await expect(page.locator('#uploaded-files')).toHaveText('sample2.txt');

  // Static wait → page.waitForTimeout() (not recommended)
  await page.waitForTimeout(3000);

});
