//TEST 76
/*
const { test, expect } = require("@playwright/test");

test("bdjobs multiple tab handling test", async ({ page, context }) => {

  // open recruiter.bdjobs.com
  await page.goto("https://recruiter.bdjobs.com/");

  // Scroll down main page
  await page.mouse.wheel(0, 800);

  //  wait for visibility after scroll
  await page.waitForLoadState("domcontentloaded");

  //  open new tab 
  const [newPage] = await Promise.all([
    context.waitForEvent("page"), // wait for new tab
    page.evaluate(() => window.open("https://www.bdjobs.com/", "_blank")) // open new tab
  ]);

  // Wait for new tab to load
  await newPage.waitForLoadState();

  //  SCROLL IN NEW TAB
  await newPage.mouse.wheel(0, 1000);

  //verify that 
  // Check new page loaded correctly

  await expect(newPage).toHaveURL(/bdjobs/);
  await newPage.mouse.wheel(0, 800);
  // If reached here → test passed
});

*/

//TEST 76 on wikipedia
/*
 const { test, expect } = require("@playwright/test");

test("multiple -tab ", async ({ page, context }) => {

  // Open main page
  await page.goto("https://www.wikipedia.org/");
  await page.waitForTimeout(2000)
  // Open new tab
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.evaluate(() =>
      window.open("https://en.wikipedia.org/wiki/Software_testing", "_blank")
    )
  ]);

  // Wait until page is fully loaded
  await newPage.waitForLoadState("networkidle");

  // Scroll down smoothly
  await newPage.evaluate(async () => {
    for (let i = 0; i < 5; i++) {
      window.scrollBy(0, 400);
      await new Promise(r => setTimeout(r, 500)); // small pause to see scrolling
    }
  });

  // Wait for a visible element after scroll (better than timeout)
  await expect(newPage.locator("#History")).toBeVisible();

  // Final validation
  await expect(newPage).toHaveURL(/Software_testing/);

});
*/