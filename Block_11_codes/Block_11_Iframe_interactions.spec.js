//TEST 77

const { test, expect } = require("@playwright/test");

test("iframe interaction ", async ({ page }) => {

  // Step 1: Open the webpage
  await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe");


  // Step 2: Locate the OUTER iframe
  // This page has an iframe with id="iframeResult"
  const outerFrame = page.frameLocator("#iframeResult");


  // Step 3: Locate the INNER iframe inside the outer iframe
  // Inside the outer iframe, there is another iframe
  const innerFrame = outerFrame.frameLocator("iframe");


  // Step 4: Verify text inside the inner iframe
  // We check if the heading (h1) text is correct
  await expect(innerFrame.locator("h1"))
    .toHaveText("This page is displayed in an iframe");


  // Step 5: Scroll inside the inner iframe
  // We execute JavaScript to scroll down inside the iframe body
  await innerFrame.locator("body").evaluate((el) => {
    el.scrollBy(0, 300); // scroll down by 300 pixels
  });


  // Step 6: Final check (optional)
  // Ensure the iframe is still visible after scrolling
  await expect(innerFrame.locator("h1")).toBeVisible();

});