//Test 79

const { test, expect } = require("@playwright/test");

test("open new tab and verify", async ({ browser }) => {

  // Create a browser context
  const context = await browser.newContext();

  // Open first tab and go to BDJobs recruiter site
  const page1 = await context.newPage();
  await page1.goto("https://recruiter.bdjobs.com");

  // Wait for 3 seconds on the first page
  await page1.waitForTimeout(1000);

  //  Open a new tab
  const page2 = await context.newPage();
  await page2.goto("https://www.wikipedia.org");

  // S Scroll down in the new tab
  await page2.mouse.wheel(0, 1000);

  // Wait for 2 seconds to observe scroll
  await page2.waitForTimeout(2000);

  // Step 5: Verify that a new tab is opened
  const pages = context.pages();
  await expect(pages.length).toBe(2);

});

