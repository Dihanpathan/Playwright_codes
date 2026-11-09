//Test 22

const { test, expect } = require('@playwright/test');

test('Drag and drop test on jQuery UI droppable site', async ({ page }) => {
  test.setTimeout(40000);

  // Open jQuery UI droppable demo page
  await page.goto('https://jqueryui.com/droppable/', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForTimeout(3000);

  // The drag and drop demo is inside an iframe
  const frame = page.frameLocator('.demo-frame');

  // Locate draggable and droppable elements inside iframe
  const draggable = frame.locator('#draggable');
  const droppable = frame.locator('#droppable');

  await expect(draggable).toBeVisible();
  await expect(droppable).toBeVisible();

  await page.waitForTimeout(1000);

  // Drag source element and drop it on target element
  await draggable.dragTo(droppable);

  await page.waitForTimeout(3000);

  // Verify drop result
  await expect(droppable).toContainText('Dropped!');

  await page.waitForTimeout(3000);
});