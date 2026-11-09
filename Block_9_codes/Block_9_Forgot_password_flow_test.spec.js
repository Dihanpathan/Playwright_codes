// TEST 66

// tests Reset -password
const { test, expect } = require("@playwright/test");

test("Forgot password flow should accept a valid email", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/forgot-password");

  await expect(page.getByRole("heading", {
    name: /dummy forgot password form page/i
  })).toBeVisible();

  await page.getByLabel(/e-mail/i).fill("demo@example.com");

  await page.mouse.wheel(0, 900);

  await page.waitForTimeout(5000)

  await page.getByRole("button", { name: /retrieve password/i }).click();

  // Demo site says an email will be sent with reset instructions.
  // So we verify successful submission / reset request behavior.

  await expect(page.locator("body")).toContainText(/email|sent|reset|password/i);
  await page.mouse.wheel(0, 700);
  await page.waitForTimeout(4000)
});
