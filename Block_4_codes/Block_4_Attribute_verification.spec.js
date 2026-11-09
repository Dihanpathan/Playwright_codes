//Test 30

const { test, expect } = require('@playwright/test');

test('Attribute verification test', async ({ page }) => {
  // Open recruiter website
  await page.goto('https://recruiter.bdjobs.com/');

  // Locate Service Packages link
  const servicePackages = page.locator('a.custom-service-btn');

  // Verify href attribute
  await expect(servicePackages).toHaveAttribute('href','https://recruiter.bdjobs.com/RecruiterAccount/service-packages');

  // Locate username input
  const usernameField = page.getByPlaceholder('Enter your username');

  // Verify placeholder attribute
  await expect(usernameField).toHaveAttribute(
    'placeholder',
    'Enter your username'
  );
});