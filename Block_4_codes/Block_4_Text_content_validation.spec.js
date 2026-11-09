//TEST 29

const { test, expect } = require('@playwright/test');

test('Text content validation on recruiter.bdjobs.com', async ({ page }) => {
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForTimeout(2000);

  // Validate heading/paragraph text
  await expect(page.getByText('Create or sign in to your account')).toBeVisible();

  // Validate Sign in button text
  const signInButton = page.getByRole('button', { name: /^sign in$/i });
  await expect(signInButton).toBeVisible();
  await expect(signInButton).toHaveText(/sign in/i);

  // Validate username field placeholder
  const usernameField = page.getByPlaceholder('Enter your username');
  await expect(usernameField).toBeVisible();

  // Validate password field placeholder
  const passwordField = page.getByPlaceholder('Enter your password');
  await expect(passwordField).toBeVisible();

  // Validate Service Packages link - first matching link
  const servicePackagesLink = page.getByRole('link', {
    name: /^Service Packages$/
  }).first();

  await expect(servicePackagesLink).toBeVisible();
  await expect(servicePackagesLink).toHaveText(/Service Packages/);

  await page.waitForTimeout(3000);
  
});