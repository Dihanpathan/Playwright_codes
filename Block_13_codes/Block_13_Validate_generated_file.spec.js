//Test 90 test on herokuapp
const { test, expect } = require("@playwright/test");
const fs = require("fs");

test("validate generated file", async ({ page }) => {

  // Open the page where file is generated
  await page.goto("https://the-internet.herokuapp.com/download");

  // Wait for page to load properly
  await page.waitForTimeout(2000);

  // Start waiting for file download before clicking
  const downloadPromise = page.waitForEvent("download");

  // Click the button/link that generates or downloads the file
  await page.locator("#content a").first().click();

  // Capture the downloaded file
  const download = await downloadPromise;

  // Get generated file name
  const fileName = download.suggestedFilename();

  // Save generated file locally
  const filePath = `./downloads/${fileName}`;
  await download.saveAs(filePath);

  // Verify file was generated/downloaded
  expect(fs.existsSync(filePath)).toBeTruthy();

  // Verify file name is not empty
  expect(fileName).toBeTruthy();

  // Verify file size is greater than 0
  const fileSize = fs.statSync(filePath).size;
  expect(fileSize).toBeGreaterThan(0);

});
