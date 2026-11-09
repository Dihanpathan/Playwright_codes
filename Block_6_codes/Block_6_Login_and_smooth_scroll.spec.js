//TEST 48

const { test, expect } = require('@playwright/test');

test('login and click Load More two times with smooth scroll', async ({ page }) => {
  // Open recruiter.bdjobs.com
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Enter username
  await page.locator('input[type="text"], input[type="email"]').first().fill('mehedi595');

  // Enter password
  await page.locator('input[type="password"]').fill('a');

  // Click Login button
  await page.getByRole('button', { name: /login|sign in/i }).click();

  // Wait after login
  await page.waitForLoadState('networkidle');

  // Locate Load More button
  const loadMoreButton = page.getByRole('button', { name: /load more/i });

  // Smooth scroll to first Load More button
  await loadMoreButton.evaluate((element) => {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });

  // Wait to observe smooth scroll
  await page.waitForTimeout(2000);

  // Verify first Load More button is visible
  await expect(loadMoreButton).toBeVisible();

  // Click first Load More button
  await loadMoreButton.click();

  // Wait to observe first Load More result
  await page.waitForTimeout(3000);

  // Smooth scroll to second Load More button
  await loadMoreButton.evaluate((element) => {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });

  // Wait to observe smooth scroll
  await page.waitForTimeout(2000);

  // Verify second Load More button is visible
  await expect(loadMoreButton).toBeVisible();

  // Click second Load More button
  await loadMoreButton.click();

  // Wait to observe second Load More result
  await page.waitForTimeout(3000);
});
