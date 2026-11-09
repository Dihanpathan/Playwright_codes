const { test, expect } = require('@playwright/test');

test('Concurrent login in test', async ({ browser }) => {
test.setTimeout(40000)
  // Create one browser context → same session space
  const context = await browser.newContext();

  // Create 2 tabs → newPage()
  const page1 = await context.newPage();
  const page2 = await context.newPage();
  const page3 = await context.newPage();

  // TAB 1 LOGIN 
  await page1.goto('https://recruiter.bdjobs.com');
  await page1.fill('input[placeholder="Enter your username"]', 'user1');
  await page1.fill('input[placeholder="Enter your password"]', 'pass');
  await page1.click('button:has-text("Sign in")');
  
  //  TAB 2 LOGIN (same browser, new tab) 
  await page2.goto('https://recruiter.bdjobs.com');
  await page2.fill('input[placeholder="Enter your username"]', 'user2');
  await page2.fill('input[placeholder="Enter your password"]', 'pass');
  await page2.click('button:has-text("Sign in")');
  await page2.waitForTimeout(3000)


    // TAB 3 LOGIN 
  await page3.goto('https://recruiter.bdjobs.com');
  await page3.fill('input[placeholder="Enter your username"]', 'user3');
  await page3.fill('input[placeholder="Enter your password"]', 'pass');
  await page3.click('button:has-text("Sign in")');
  // Wait for both tabs
  await page1.waitForLoadState('networkidle');
  await page2.waitForLoadState('networkidle');
  await page3.waitForLoadState('networkidle');

  // Verify both tabs logged in
  await expect(page1).not.toHaveURL(/login/);
  await expect(page2).not.toHaveURL(/login/);
  await expect(page3).not.toHaveURL(/login/);

});