const { test, expect } = require('@playwright/test');

test(' logout Verification', async ({ page }) => {

  // Open site
  await page.goto('https://recruiter.bdjobs.com');

  // Login
  await page.fill('input[placeholder="Enter your username"]', 'Testaccount');
  await page.fill('input[placeholder="Enter your password"]', 'Password');
  await page.click('button:has-text("Sign in")');

  // Wait for dashboard
  await page.waitForLoadState('networkidle');

  // Click dropdown using XPath → page.locator('xpath=...')
  await page.locator('xpath=//*[@id="dropdownBasic1"]/span').click();
  await page.waitForTimeout(2000)

  // Wait for Sign out to appear → expect()
  const signOut = page.locator('text=Sign out');
  await expect(signOut).toBeVisible();

  // Click Sign out
  await signOut.click();
  await page.waitForTimeout(2000)
  // Verify logout → login button visible
  await expect(page.locator('button:has-text("Sign in")')).toBeVisible();

});