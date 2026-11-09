const { test, devices } = require("@playwright/test");

test.use({
  ...devices["iPhone 13"]   // Enable mobile + touch
});

test("swipe and tap test", async ({ page }) => {

  // Open a scrollable page
  await page.goto("https://www.wikipedia.org");

  // Wait so page is visible
  await page.waitForTimeout(2000);

  // TAP on an element (example: click English link)

  await page.tap('a[id="js-link-box-en"]');

  // Wait after tap
  await page.waitForTimeout(2000);

  // SWIPE / scroll down
  await page.evaluate(() => {
    window.scrollBy(0, 800);
  });

  // Wait to observe scroll
  await page.waitForTimeout(3000);

});