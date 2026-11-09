//Test 31 


const { test, expect } = require('@playwright/test');

test('CSS property validation test', async ({ page }) => {
  // Open recruiter website
  await page.goto('https://recruiter.bdjobs.com/');

  // Locate the Sign in button
  const signInButton = page.getByRole('button', { name: /^sign in$/i });

  // Check that the button is visible on the page
  await expect(signInButton).toBeVisible();

  // Verify Sign in button background color
  await expect(signInButton).toHaveCSS(
    'background-color',
    'rgb(14, 115, 169)'
  );

  // Verify Sign in button text color
  await expect(signInButton).toHaveCSS(
    'color',
    'rgb(255, 255, 255)'
  );

  // Verify mouse cursor style on the button
  await expect(signInButton).toHaveCSS(
    'cursor',
    'pointer'
  );
});
