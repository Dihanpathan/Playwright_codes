//TEST 13


import { test, expect } from '@playwright/test';

test('Radio button select test', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Main_Page', {
    waitUntil: 'domcontentloaded'
  });
 await page.waitForTimeout(3000);
  // Open the Appearance menu if it is collapsed
  const appearanceButton = page.getByRole('button', { name: /appearance/i });

  if (await appearanceButton.isVisible()) {
    await appearanceButton.click();
  }

  // Select Dark mode
  const darkModeRadio = page.getByRole('radio', { name: /dark/i });

  await expect(darkModeRadio).toBeVisible();
  //Selecting dark mode button
  await darkModeRadio.check();

  // Verify Dark mode is selected
  await expect(darkModeRadio).toBeChecked();
  await page.waitForTimeout(2000);
});
