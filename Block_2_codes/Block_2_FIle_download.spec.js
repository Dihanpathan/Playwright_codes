//Test 15 Download 

import { test, expect } from '@playwright/test';

test('Navigate PDF page and press Ctrl+S', async ({ page }) => {
  // Visit bdjobs first
  await page.goto('https://www.bdjobs.com/', {
    waitUntil: 'domcontentloaded'
  });

  await expect(page).toHaveURL(/bdjobs\.com/);

  // Navigate to PDF page
  await page.goto('https://hotjobs.bdjobs.com/jobs/cbm/cbm24.pdf', {
    waitUntil: 'domcontentloaded'
  });

  await expect(page).toHaveURL(/cbm24\.pdf/);

  // Wait for PDF viewer to load
  await page.waitForTimeout(3000);

  // Press Ctrl + S
  await page.keyboard.press('Control+S');

  // Wait so you can see Save As dialog
  await page.waitForTimeout(5000);
});
