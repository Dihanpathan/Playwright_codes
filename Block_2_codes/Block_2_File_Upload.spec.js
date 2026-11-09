//TEST 15 UPLOAD test by dihan


import { test, expect } from '@playwright/test';
// Import Node.js path module → used for file path handling
import path from 'path';

// Define test using Playwright test() method
test('Upload file on Herokuapp', async ({ page }) => {

  // Navigate to URL 

  await page.goto('https://the-internet.herokuapp.com/upload');

  // Create file path → path.join() method
  // process.cwd() → gets current working directory

  const filePath = path.join(process.cwd(), 'tests/data/sample.txt');

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

  await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');

  // Static wait → page.waitForTimeout() (not recommended)
  await page.waitForTimeout(3000);

});
