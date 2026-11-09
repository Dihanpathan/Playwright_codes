
import { test, expect } from '@playwright/test';

test('filter rows using column name', async ({ page }) => {

  // Navigate to URL → page.goto()
  await page.goto('https://the-internet.herokuapp.com/tables');

  // Locate rows → page.locator()
  // Selector used: CSS selector (#table2 tbody tr)
  // Filter: hasText 'Doe' → finds row containing "Doe"

  const row = page.locator('#table2 tbody tr').filter({ hasText: 'Doe' });

  // Assertion → expect()
  // Method: toHaveCount() → ensures only one matching row found

  await expect(row).toHaveCount(1);

  // Locate cells → row.locator('td')
  // Validate column value → .nth(1) (First Name column)

  await expect(row.locator('td').nth(1)).toHaveText('Jason');

  // Static wait → page.waitForTimeout() 

  await page.waitForTimeout(3000);

});
