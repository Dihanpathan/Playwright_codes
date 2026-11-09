

import { test, expect } from '@playwright/test';

test('element exists but not visible', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  //locate element by selector 

  const hiddenText = page.locator('#finish');
  await page.waitForTimeout(3000);

  // Before clicking → element exists but hidden

  await expect(hiddenText).toBeHidden();
  
  await page.waitForTimeout(3000);

});