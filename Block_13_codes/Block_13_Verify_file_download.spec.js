
//TEST 89

//Test 88 demo page


const { test, expect } = require("@playwright/test");

// Define test case for file download
test("verify file download", async ({ page }) => {

  // Open  website that provides downloadable files
  await page.goto("https://the-internet.herokuapp.com/download");

  // Wait for 3 seconds 
  await page.waitForTimeout(3000);

  // Start waiting for download event BEFORE clicking
  const downloadPromise = page.waitForEvent("download");

  // Click on a file link to trigger download
  await page.click("text=some-file.txt"); 

  // Capture the download object
  const download = await downloadPromise;

  // Get the suggested file name from download
  const fileName = download.suggestedFilename();
  expect(fileName).toBeTruthy();
  // Save the downloaded file to local system
  await download.saveAs(`./downloads/${fileName}`);
  await page.waitForTimeout(3000);

});