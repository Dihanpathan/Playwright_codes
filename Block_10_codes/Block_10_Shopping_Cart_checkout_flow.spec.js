
//test 70 demo page
const { test, expect } = require("@playwright/test");

test("shopping cart checkout flow", async ({ page }) => {
  
  await page.goto("https://www.saucedemo.com/");

  // LOGIN to the site 

  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");

  // Click login button
  await page.click("#login-button");

  await page.waitForTimeout(2000);

  //  ADD PRODUCT TO CART
  await page.click("#add-to-cart-sauce-labs-backpack");

  // Open shopping cart page
  await page.click(".shopping_cart_link");

  // Verify the selected item is present in cart
  await expect(page.locator(".cart_item")).toContainText("Sauce Labs Backpack");

  await page.waitForTimeout(2000);

  // Click checkout button
  await page.click("#checkout");

  // Wait for checkout page to load
  await page.waitForTimeout(2000);

  // Fill user details for checkout
  await page.fill("#first-name", "John");   
  await page.fill("#last-name", "Doe");    
  await page.fill("#postal-code", "1212");  
  await page.waitForTimeout(2000);

  // Click continue to go to overview page
  await page.click("#continue");

  // Verify that summary/overview section is visible
  await expect(page.locator(".summary_info")).toBeVisible();

  // Click finish to complete the order
  await page.click("#finish");

  // Verify order success message
  await expect(page.locator(".complete-header")).toHaveText(
    "Thank you for your order!"
  );
  await page.waitForTimeout(2000);
});
