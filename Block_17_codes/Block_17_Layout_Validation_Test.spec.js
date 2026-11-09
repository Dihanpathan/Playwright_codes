//Test 113 layout validation test 

// Import Playwright test functions
const { test, expect } = require('@playwright/test');

// Test to validate layout (position & visibility)
test('layout validation test', async ({ page }) => {

  // Open website
  await page.goto('https://recruiter.bdjobs.com');

  // Locate username input
  const username = page.locator('#username');
  
  // Locate password input
  const password = page.locator('#password');

  // Locate login button
  const loginBtn = page.locator('button[type="submit"]');

  // Check all elements are visible
  await expect(username).toBeVisible();
  await expect(password).toBeVisible();
  await expect(loginBtn).toBeVisible();

  // Get positions of elements
  
  const userBox = await username.boundingBox();
  const passBox = await password.boundingBox();
  const btnBox = await loginBtn.boundingBox();

  // Print positions
  console.log({ userBox, passBox, btnBox });

  // Validate layout order (username above password, password above button)
  expect(userBox.y).toBeLessThan(passBox.y);
  expect(passBox.y).toBeLessThan(btnBox.y);
  

});

