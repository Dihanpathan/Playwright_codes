const { test, devices } = require("@playwright/test");

test.use({
  ...devices["Pixel 5"]   // Apply Pixel 5 settings
});

test("test in Pixel 5", async ({ page }) => {

  // Open website in mobile view
  await page.goto("https://recruiter.bdjobs.com");

  // Wait to observe mobile layout
  await page.waitForTimeout(3000);

});