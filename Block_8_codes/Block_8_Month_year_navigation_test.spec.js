//TEST 59
const { test, expect } = require('@playwright/test');
test('Month year navigation test', async ({ page }) => {
  // Open recruiter website
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Enter username
  await page.locator('input[type="text"], input[type="email"]').first().fill('mehedi595');

  // Enter password
  await page.locator('input[type="password"]').fill('password');

  // Click Login button
  await page.getByRole('button', { name: /login|sign in/i }).click();

  // Wait for dashboard/home page after login
  await page.waitForLoadState('networkidle');

  // Verify login success
  await expect(page).not.toHaveURL(/login|signin/i);

  // Open date range picker
  await page.locator('.container-header-icon').first().click();

  // Wait for calendar to open
  await page.waitForTimeout(2000);
  
  // Click on Select Month dropdown/title
 const monthDropdown = page.locator('[aria-label="Select month"]');

// Click month dropdown
await monthDropdown.click();

// Select Jan using keyboard
await page.keyboard.press('Home');

// Verify Jan is selected
await expect(monthDropdown).toHaveValue(/10/);

await page.waitForTimeout(3000)

await page.locator('[aria-label="Select year"]').selectOption('2021');

await page.waitForTimeout(3000)

await page.getByText('1', { exact: true }).first().click();
await page.waitForTimeout(3000)
//await page.mouse.click(100, 100); 
// Click on 15
await page.getByText('20', { exact: true }).first().click();
await page.mouse.click(100, 100); 
await page.waitForTimeout(2000)
});
