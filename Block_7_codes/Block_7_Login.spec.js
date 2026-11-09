//Login test 
const { test, expect } = require("@playwright/test");

test("Login to hrm", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // wait for input
  await page.getByPlaceholder("Username").waitFor();

  await page.getByPlaceholder("Username").fill("Admin");
  await page.waitForTimeout(2393)
  await page.locator("input[name='password']").fill("admin123");

  await page.locator("button[type='submit']").click();
  await page.waitForTimeout(5000)
  await expect(page).toHaveURL(/dashboard/);
  await page.getByAltText("profile picture").first().click()
  await expect(page).toHaveURL(/index/);
  await page.waitForTimeout(2000);

});
