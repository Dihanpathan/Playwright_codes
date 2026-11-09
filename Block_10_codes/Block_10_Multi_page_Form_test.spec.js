//Test 71 Multi page form 
const { test, expect } = require('@playwright/test');

test('multi page form test on recruiter.bdjobs.com', async ({ page }) => {

  test.setTimeout(80000);
  // Open recruiter website
  await page.goto('https://recruiter.bdjobs.com/', {
    waitUntil: 'networkidle'
  });

  // Login
  await page.locator('input[type="text"], input[type="email"]').first().fill('username');
  await page.locator('input[type="password"]').fill('Password');
  await page.getByRole('button', { name: /login|sign in/i }).click();

  //Click on post a new job btn
  await page.locator('xpath=//*[@id="root-component"]/main/app-job-dashboard/div/div/a[1]/img').click()


await page.locator('xpath=//*[@id="ser_type"]').nth(1).click();
await page.locator('xpath=//*[@id="jpTil"]').click();
await page.locator('xpath=//*[@id="jpTil"]').fill('jr software engineer');
await page.locator('.icon-calendar').click();

await page.getByText('15', { exact: true }).first().click();

const categoryInput = page.locator(
  'xpath=/html/body/app-root/div/app-jobposting/div[2]/div[2]/div[2]/app-job-information/form/div[1]/div[1]/div[3]/div/div/ng-select/div/div/div[2]/input'
);
//select category(accounting) 
await categoryInput.click();
await categoryInput.fill('Accounting');
await page.getByText('Accounting/Finance', { exact: true }).click();

//Enter minimum salary?(15000)
await page.locator('xpath=//*[@id="Minimum"]').click();
await page.locator('xpath=//*[@id="Minimum"]').fill('15000');

//Click on continue button for next page
await page.locator('.btn.continuebtn').click();

//Selct min age 18 years 
await page.locator('#minage').click();
await page.locator('#minage').selectOption('18');
await page.locator('.btn.btn__outline.savebtn').click();
await page.waitForTimeout(20000)

});
