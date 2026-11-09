//TEST 107 keyboard navigation test
const { test, expect } = require('@playwright/test');
test('keyboard navigation test - bdjobs recruiter', async ({ page }) => {

  // Open website
  await page.goto('https://recruiter.bdjobs.com', { waitUntil: 'load' });

  // Press TAB to move focus to different inputs
  await page.keyboard.press('Tab'); // 1st focus
  await page.waitForTimeout(2000)
  await page.keyboard.press('Tab'); // 2nd focus
  await page.waitForTimeout(300) 
  await page.keyboard.press('Tab'); // 3rd focus
  await page.waitForTimeout(2000)
  await page.keyboard.press('Tab');
  await page.keyboard.insertText('Dihan')
  await page.waitForTimeout(2000)
  await page.keyboard.press('Tab');
  await page.keyboard.insertText('password')
  await page.waitForTimeout(2000)
  await page.keyboard.press('Tab');
  await page.waitForTimeout(2000)
  await page.keyboard.press('Tab');
  await page.waitForTimeout(2200);
  await page.keyboard.press('Enter')
  // Get currently focused element
  const focused = await page.evaluate(() => document.activeElement.tagName);

  // Print focused element
  console.log('Focused element:', focused);

  // Check that focus is not stuck on body
  //expect(focused).not.toBe('BODY');
});