//TEST 82

const { test, expect } = require("@playwright/test");

test("Verify users API status and UI", async ({ page }) => {

  // Wait for the API response while opening the page
  const responsePromise = page.waitForResponse(
    "https://jsonplaceholder.typicode.com/users"
  );

  // Open the users page
  await page.goto("https://jsonplaceholder.typicode.com/users");

  // Capture the API response
  const response = await responsePromise;

  // Verify status code is 200
  await expect(response.status()).toBe(200);

  // Wait to visually observe the data
  await page.waitForTimeout(3000);

  // Verify user data is visible on UI
  await expect(page.locator("body")).toContainText("Leanne Graham");

  // Scroll down
  await page.mouse.wheel(0, 1000);

  // Wait to observe scrolling
  await page.waitForTimeout(2000);

  // Verify more data
  await expect(page.locator("body")).toContainText("Clementina DuBuque");

});
