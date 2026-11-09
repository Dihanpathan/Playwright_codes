//Test 71 on demo page

const { test, expect } = require("@playwright/test");

test("real 2-page signup form", async ({ page }) => {

  // HOME PAGE 
  await page.goto("https://automationexercise.com/");

  // Click Signup/Login
  await page.click("text=Signup / Login");

  // PAGE 1: Name and email 
  await page.fill("input[name='name']", "John Doe");
  await page.fill("input[data-qa='signup-email']", "john" + Date.now() + "@test.com");
  await page.waitForTimeout(3000)
  await page.click("button[data-qa='signup-button']");

  // Verify navigation to Page 2
  await expect(page).toHaveURL(/signup/);

  //PAGE 2: ACCOUNT DETAILS 
  await page.check("#id_gender1"); // select title
  await page.fill("#password", "Password123");

  await page.selectOption("#days", "10");
  await page.selectOption("#months", "5");
  await page.selectOption("#years", "1995");
  await page.waitForTimeout(2000)
  await page.fill("#first_name", "John");
  await page.fill("#last_name", "Doe");
  await page.fill("#address1", "123 Street");
  await page.waitForTimeout(2000)
  await page.selectOption("#country", "Canada");
  await page.fill("#state", "Dhaka");
  await page.fill("#city", "Dhaka");
  await page.fill("#zipcode", "1207");
  await page.fill("#mobile_number", "012323232323");
  await page.waitForTimeout(3000);
  // Submit form
  await page.click("button[data-qa='create-account']");
  await page.waitForTimeout(2000)
  //VERIFICATION
  await expect(page.getByRole("heading", { name: "Account Created!" })) .toBeVisible()
  await page.waitForTimeout(3000)

});