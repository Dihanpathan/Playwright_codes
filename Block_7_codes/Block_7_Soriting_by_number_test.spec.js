//TEST 51

const { test, expect } = require('@playwright/test');

test('sorting test by number ascending and descending', async ({ page }) => {
  // Go to jobs page
  await page.goto('https://bdjobs.com/h/jobs?JobType=new', {
    waitUntil: 'networkidle'
  });

  // Locate Jobs per page dropdown
  const jobsPerPageDropdown = page.locator('select').first();

  // Verify dropdown is visible
  await expect(jobsPerPageDropdown).toBeVisible();

  // Select 75 jobs per page
  await jobsPerPageDropdown.selectOption({ label: '75' });
  await page.waitForLoadState('networkidle');

  // Wait to observe 75 selection
  await page.waitForTimeout(3000);

  // Mouse scroll down slowly
  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(1000);

  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(1000);

  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(1000);

  // Scroll back to top so dropdown is visible again
  await page.mouse.wheel(0, -1500);
  await page.waitForTimeout(2000);

  // Verify dropdown is visible again
  await expect(jobsPerPageDropdown).toBeVisible();

  // Select 30 jobs per page
  await jobsPerPageDropdown.selectOption({ label: '30' });
  await page.waitForLoadState('networkidle');

  // Wait to observe 30 selection
  await page.waitForTimeout(3000);

  // Mouse scroll down slowly again
  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(1000);

  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(1000);

  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(3000);
});
