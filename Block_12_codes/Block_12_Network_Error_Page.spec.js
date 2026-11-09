//TEST 84 Error page test

const { test, expect } = require("@playwright/test");

test("verify network error page", async ({ page }) => {

  // Open an invalid domain 
  await page.goto("https://wrong-network-url-12345.com").catch(() => {});

  // Verify browser shows network error page
  await expect(page.locator("body")).toContainText(/This site can’t be reached|This site can't be reached/);

  // Wait and observe the error
  await page.waitForTimeout(3000);

});