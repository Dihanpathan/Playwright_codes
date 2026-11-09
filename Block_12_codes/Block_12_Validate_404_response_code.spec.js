//TEST 84  --> 404 code validation test 

const { test, expect } = require("@playwright/test");

test("verify 404 response code ", async ({ page }) => {

  // Open a real site with visible 404 page
  const response = await page.goto("https://recruiter.bdjobs.com/404");

  // Verify status code is 404
  expect(response.status()).toBe(404);

  // Verify "Not Found" text is visible on UI
  await expect(page.locator("body")).toContainText("404");

  // Wait so you can clearly see the result
  await page.waitForTimeout(3000);

});

