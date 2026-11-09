//Test 72 progress indicator 

const { test, expect } = require('@playwright/test');

test('Progress indicator test on recruiter.bdjobs.com', async ({ page }) => {

  test.setTimeout(80000);
  // Open recruiter website
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Login
  await page.locator('input[type="text"], input[type="email"]').first().fill('User1');
  await page.locator('input[type="password"]').fill('Pass');
  await page.getByRole('button', { name: /login|sign in/i }).click();
   await page.waitForTimeout(5000);
  await page.locator('xpath=//*[@id="root-component"]/main/app-job-dashboard/div/app-job-post-container/div/app-job-post-container-header/div/div/div/ul/li[2]/a').click();
 

 const progress = page.locator('#progress').first();
 await expect(progress).toBeVisible();

const billingStep = page.locator('.step-title', { hasText: 'Billing' }).first();
await expect(billingStep).toBeVisible();
await page.waitForTimeout(3000);
});

/*
//TEST 72 on demo page

const { test, expect } = require("@playwright/test");

test("progress bar test (DemoQA)", async ({ page }) => {
  await page.goto("https://demoqa.com/progress-bar");

  // Start progress
  await page.click("#startStopButton");

  // Wait until progress reaches 55%
  await page.waitForFunction(() => {
    const value = document.querySelector("#progressBar").textContent;
    return value.includes("55%");
  });

  // Stop progress
  await page.click("#startStopButton");

  // Get current progress value
  const progressText = await page.locator("#progressBar").textContent();

  // Verify progress reached ~50%
  expect(progressText).toContain("55%");
});
*/