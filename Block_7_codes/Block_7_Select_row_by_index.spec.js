import { test, expect } from '@playwright/test';

test('select row by index', async ({ page }) => {

  // Navigate to URL → page.goto()
  await page.goto('https://the-internet.herokuapp.com/tables');

  // Locate table → page.locator()
  // Selector used: ID selector (#table2)

  const table = page.locator('#table2');

  // Select row by index → .locator() + .nth()
  // tbody tr → all rows inside table body
  // nth(2) → 3rd row (0-based index)

  const row = table.locator('tbody tr').nth(2);

  // Locate all cells in that row → row.locator('td')

  const cells = row.locator('td');

  // Assertion → expect()
  // Validate each column value using .nth(index)

  // Column 0 → Last Name

  await expect(cells.nth(0)).toHaveText('Doe');

  // Column 1 → First Name

  await expect(cells.nth(1)).toHaveText('Jason');

  // Column 2 → Email

  await expect(cells.nth(2)).toHaveText('jdoe@hotmail.com');

  // Column 3 → Due amount

  await expect(cells.nth(3)).toHaveText('$100.00');

  // Column 4 → Website

  await expect(cells.nth(4)).toHaveText('http://www.jdoe.com');

});