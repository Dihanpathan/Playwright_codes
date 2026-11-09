
// Row data validation test

import { test, expect } from '@playwright/test';

test('Row data validate', async ({ page }) => {

  // Navigate to URL → page.goto()
  await page.goto('https://the-internet.herokuapp.com/tables');

  // Static wait → page.waitForTimeout() 

  await page.waitForTimeout(2000);

  // Locate specific row → page.locator() + filter()
  // Selector used: CSS selector (#table2 tbody tr)
  // Filter: hasText 'Doe' → finds row containing "Doe"

  const row = page.locator('#table2 tbody tr').filter({ hasText: 'Doe' });

  // Assertion → expect()
  // Selector: td cells using .locator('td').nth(index)

  // Last Name → column 0

  await expect(row.locator('td').nth(0)).toHaveText('Doe');

  // First Name → column 1

  await expect(row.locator('td').nth(1)).toHaveText('Jason');

  // Email → column 2

  await expect(row.locator('td').nth(2)).toHaveText('jdoe@hotmail.com');

  // Due → column 3

  await expect(row.locator('td').nth(3)).toHaveText('$100.00');

  // Website → column 4

  await expect(row.locator('td').nth(4)).toHaveText('http://www.jdoe.com');

});
