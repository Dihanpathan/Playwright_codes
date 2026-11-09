//TEST 65

const { test, expect } = require('@playwright/test');

test(' Role based access  verification ', async ({ page }) => {
test.setTimeout(60000)
  // Open site
  await page.goto('https://recruiter.bdjobs.com');

  // Login to an admin  account  
  await page.fill('input[placeholder="Enter your username"]', 'Testaccount');
  await page.fill('input[placeholder="Enter your password"]', 'a');
  await page.click('button:has-text("Sign in")');

  // Wait for dashboard to load 
  await page.waitForLoadState('networkidle');

  // Click dropdown using XPath → page.locator('xpath=...')
  await page.locator('xpath=//*[@id="dropdownBasic1"]/span').click();
  await page.waitForTimeout(2000)

  // Wait User management(for admin login only )  to appear → expect()
  const admin = page.locator('text=User Management');
  await expect(admin).toBeVisible();

  //wait for admin sign out 
   const signOut = page.locator('text=sign out ');
   await expect(signOut).toBeVisible();

  // Click to Sign out from admin 
  await signOut.click();
  await page.waitForTimeout(2000)

// Log in as a user 
  await page.fill('input[placeholder="Enter your username"]', 'test');
  await page.fill('input[placeholder="Enter your password"]', 'pass');
  await page.click('button:has-text("Sign in")');

  //wait for dashboard to appear 

  await page.waitForLoadState('networkidle');

  await page.waitForTimeout(2000)

  await page.locator('xpath=//*[@id="dropdownBasic1"]/span').click();

  await page.waitForTimeout(2000)

  //Verify text user setting is visible for (user) sign in to the site 

  const user = page.locator('text=User setting')
  await expect(user).toBeVisible();

  await page.waitForTimeout(3000)

});