//Test 40

const { test, expect } = require('@playwright/test');

test('check visible image loading and alt text on recruiter.bdjobs.com', async ({ page }) => {
  // Open the recruiter.bdjobs.com 
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Locate all images that have both src and alt attributes
  const images = page.locator('img[src][alt]');

  // Count total matched images
  const imageCount = await images.count();

  // Verify at least one image is found
  expect(imageCount).toBeGreaterThan(0);

  // Loop through each matched image
  for (let i = 0; i < imageCount; i++) {
    // Select image one by one
    const image = images.nth(i);

    // Check whether the image is visible on the page
    const isVisible = await image.isVisible();

    // Run checks only for visible images
    if (isVisible) {
      // Verify image is fully loaded
      const isLoaded = await image.evaluate((img) => {
        return img.complete && img.naturalWidth > 0;
      });

      // Assert image loaded successfully
      expect(isLoaded).toBe(true);

      // Get alt attribute value
      const altText = await image.getAttribute('alt');

      // Verify alt text is not empty
      expect(altText.trim().length).toBeGreaterThan(0);
    }
  }
});
