//TEST 95 
/*
const { test, devices } = require("@playwright/test");
test.use({
  ...devices["iPhone 13"]
});

test("mobile viewport  test", async ({ page }) => {
  await page.goto("https://recruiter.bdjobs.com");
});
*/

//Test 95 on recruiter 

const { test, expect } = require("@playwright/test");

test("responsive test - different screen sizes", async ({ page }) => {

  // Desktop view
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("https://recruiter.bdjobs.com");
  await expect(page).toHaveURL(/bdjobs/);

  // Wait to observe desktop view
  await page.waitForTimeout(4000);

  // Tablet view
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.reload();

  // Wait to observe tablet view
  await page.waitForTimeout(4000);

  // Mobile view
  await page.setViewportSize({ width: 375, height: 667 });
  await page.reload();
   
  //await page.mouse.wheel(0, 100);

  // Wait to observe mobile view
  await page.waitForTimeout(4000);
});

