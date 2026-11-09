//Test 108

const { test, expect } = require('@playwright/test');

test('basic screen reader test on recruiter', async ({ page }) => {
  // Open recruiter.bdjobs.com website
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Verify page title exists
  // Screen readers use page title to announce the page context
  await expect(page).toHaveTitle(/.+/);

  // Locate username input field
  const usernameInputfield = page.locator('input[type="text"], input[type="email"]').first();

  // Verify username input is visible
  await expect(usernameInputfield).toBeVisible();

  // Get aria-label and id from username input
  const usernameAriaLabel = await usernameInputfield.getAttribute('aria-label');
  const usernameId = await usernameInputfield.getAttribute('id');

  // Verify username input has accessible information
  expect(usernameAriaLabel || usernameId).toBeTruthy();

  // Locate password input field
  const passwordInput = page.locator('input[type="password"]');

  // Verify password input is visible
  await expect(passwordInput).toBeVisible();

  // Get aria-label and id from password input
  const passwordAriaLabel = await passwordInput.getAttribute('aria-label');
  const passwordId = await passwordInput.getAttribute('id');

  // Verify password input has accessible information
  // Placeholder is not used here
  expect(passwordAriaLabel || passwordId).toBeTruthy();

  // Locate login button by accessible role and name
  const loginButton = page.getByRole('button', { name: /login|sign in/i });

  // Verify login button is visible and readable by screen reader
  await expect(loginButton).toBeVisible();

  // Locate first image that has alt attribute
  const image = page.locator('img[alt]').first();

  // Verify image has alt attribute for screen reader
  await expect(image).toBeAttached();
});
