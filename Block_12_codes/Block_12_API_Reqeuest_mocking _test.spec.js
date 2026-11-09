// Test 82
const { test, expect } = require('@playwright/test');

test('API request mocking test on recruiter page', async ({ page }) => {

  // Mock API request
  await page.route('**/mock-jobs', async (route) => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        success: true,
        message: 'This is Test API response successful',
        jobTitle: 'TEST Job Title',
        company: 'TEST Company'
      })
    });
  });

  // Open website
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'domcontentloaded'
  });

  // Add visible test box
  await page.evaluate(() => {
    const box = document.createElement('div');
    box.id = 'mock-api-result';
    box.innerText = 'TEST API loading...';

    Object.assign(box.style, {
      position: 'fixed',
      top: '30px',
      left: '40px',
      zIndex: '99999',
      background: 'orange',
      color: 'black',
      padding: '30px',
      fontSize: '30px',
      whiteSpace: 'pre-line'
    });

    document.body.appendChild(box);
  });

  // Call mocked API
  await page.evaluate(async () => {
    const response = await fetch('/mock-jobs');
    const data = await response.json();

    document.querySelector('#mock-api-result').innerText =
      `${data.message}\n${data.jobTitle}\n${data.company}`;
  });

  // Verify response
  await expect(page.locator('#mock-api-result'))
    .toContainText('This is Test API response successful');

  await expect(page.locator('#mock-api-result'))
    .toContainText('TEST Job Title');

  await expect(page.locator('#mock-api-result'))
    .toContainText('TEST Company');

  // Wait to see result
  await page.waitForTimeout(5000);
});
