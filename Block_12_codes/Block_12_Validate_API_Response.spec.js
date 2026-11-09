//Test 83

const { test, expect } = require("@playwright/test");

test("open browser and validate API response test", async ({ page, request }) => {

  // Open the browser and navigate to the users API page
  await page.goto("https://jsonplaceholder.typicode.com/users");

  // Wait 3 seconds 
  await page.waitForTimeout(3000);

  // Send API request in background
  const response = await request.get("https://jsonplaceholder.typicode.com/users");

  // Validate status code
  await expect(response).toBeOK();

  // Convert response to JSON
  const data = await response.json();

  // Validate response structure
  expect(Array.isArray(data)).toBeTruthy();

  expect(data.length).toBeGreaterThan(0);

  // Validate  fields are present ont the jSon response 
  expect(data[0]).toHaveProperty("id");
  expect(data[0]).toHaveProperty("name");
  expect(data[0]).toHaveProperty("email");

  // Verify same data is visible on UI (browser)
  await expect(page.locator("body")).toContainText(data[0].name);

  // Scroll to visually confirm more data
  await page.mouse.wheel(0, 1000);
  await page.waitForTimeout(2000);

});