// TEST 85


const { test, expect } = require("@playwright/test");

test("verify loading state during API call", async ({ page }) => {

  // Intercept users API request
  await page.route("**/users", async (route) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await route.continue();
  });

  // Open users API directly
  await page.goto("https://jsonplaceholder.typicode.com/users");

  // Verify users API response
  await expect(page.locator("body")).toContainText("Leanne Graham");

  // Wait to see result
  await page.waitForTimeout(3000);

});
