//Test 54 Data validation in cells

/*
const { test, expect } = require('@playwright/test');

test(' job data validation', async ({ page }) => {
  await page.goto('https://bdjobs.com/h/jobs?lang=en', {
    waitUntil: 'networkidle'
  });

  // Wait for job list data to appear
  await page.waitForTimeout(5000);

  // Validate that page body has job related data
  const bodyText = await page.locator('body').innerText();

  expect(bodyText.trim().length).toBeGreaterThan(0);
  expect(bodyText).toMatch(/job|company|deadline|salary|vacancy/i);
});
*/

/*
import { test, expect } from '@playwright/test';

test('Data validation in cells', async ({ page }) => {

  // Navigate to URL → page.goto()
  await page.goto('https://the-internet.herokuapp.com/tables');

  // Locate table → page.locator()

  const table = page.locator('#table2');

  // Locate rows → tbody tr
  const rows = table.locator('tbody tr');

  // Assertion → table visible
  await expect(table).toBeVisible();

  // Expected headers → array

  const expectedHeaders = ['Last Name','First Name','Email','Due','Web Site','Action'];

  // Assertion → header validation
  // toHaveText() checks all column headers match

  await expect(table.locator('thead th')).toHaveText(expectedHeaders);

  // Loop through rows → for loop
  for (let i = 0; i < await rows.count(); i++) {

    // Get all cells in row → locator('td')

    const cells = rows.nth(i).locator('td');

    // Assertion → first cell not empty
    // not.toBeEmpty() ensures data exists

    await expect(cells.first()).not.toBeEmpty();

    // Get Due column text → .textContent()

    const due = await cells.nth(3).textContent();

    // Convert "$100.00" → 100
    // replace() removes $ and comma
    // + converts string → number

    const amount = +due.replace(/[$,]/g, '');

    // Assertion → numeric value > 0

    expect(amount).toBeGreaterThan(0);

    // Static wait → page.waitForTimeout() (not recommended)
    
    await page.waitForTimeout(3000);
  }

});
*/