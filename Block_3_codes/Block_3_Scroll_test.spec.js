//Scroll test 

const { test } = require('@playwright/test');

test('scroll test on bdjobs.com', async ({ page }) => {
  await page.goto('https://recruiter.bdjobs.com');

  // Scroll to bottom
  await page.evaluate(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });

  await page.waitForTimeout(3000);

  // Scroll to top
  await page.evaluate(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  await page.waitForTimeout(3000);
});
