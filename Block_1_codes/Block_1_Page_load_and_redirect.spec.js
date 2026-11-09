// TEST 7

// Import Playwright test utilities
const { test, expect } = require('@playwright/test');

// Define a test that checks page load, login, and redirect
test('Load + Redirect + Login', async ({ page }) => {

  // Step 1: Navigate to the recruiter site
  await page.goto('https://recruiter.bdjobs.com');

  // Step 2: Verify page loaded by checking visible text
  // This confirms that the landing page content is displayed
  await expect(page.locator('text=Ready to hire your next talent?')).toBeVisible();

  // Step 3: Store the current URL before login
  // This will be used later to verify redirection after login
  const oldURL = page.url();

  // Step 4: Fill in login credentials
  // Enter username and password into respective input fields
  await page.fill('input[placeholder="Enter your username"]', 'mehedi595');
  await page.fill('input[placeholder="Enter your password"]', 'password');

  // Step 5: Click the "Sign in" button to attempt login
  await page.click('button:has-text("Sign in")');

  // Step 6: Wait for network to be idle (page fully loaded after login)
  await page.waitForLoadState('networkidle');

  // Step 7: Verify that URL has changed after login
  // If URL is different, it indicates a successful redirect
  await expect(page.url()).not.toBe(oldURL);

});