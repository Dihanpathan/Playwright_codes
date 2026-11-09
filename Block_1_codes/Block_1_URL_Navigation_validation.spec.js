//URL NAVIGATION & VALIDATION TEST
//TEST Row 5


  // Import Playwright test functions
  const { test, expect } = require('@playwright/test');

  // Define a test case named "bdjobs recruiter login"
  test('bdjobs recruiter login', async ({ page }) => {

  // Navigate to the Bdjobs recruiter login page
  await page.goto('https://recruiter.bdjobs.com');

  // Fill the username input field using its placeholder attribute
  await page.fill('input[placeholder="Enter your username"]', 'mehedi595');

  // Fill the password input field using its placeholder attribute
  await page.fill('input[placeholder="Enter your password"]', 'Password');

  // Click on the "Sign in" button using text selector
  await page.click('button:has-text("Sign in")');

  // Wait until the page finishes loading (no network activity)
  await page.waitForLoadState('networkidle');

  // Validate that the URL has changed (i.e., user is no longer on login page)
  await expect(page).not.toHaveURL(/login/);

});
