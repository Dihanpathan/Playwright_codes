//Test 33 (absence)

import { test, expect } from '@playwright/test';

test('check element is absent', async ({ page }) => {
  await page.goto('https://recruiter.bdjobs.com');

  // check element does NOT exist
  await expect(page.locator('text=Tested By Dihan ')).toHaveCount(0);
});

