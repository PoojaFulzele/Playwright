const { test, expect } = require('@playwright/test');
const assert = require ('assert');

test("verify the login functionality with valid credentials",async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(50000)
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
    expect(await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toBeVisible()
    expect(await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toHaveText('Dashboard')
    expect(await page).toHaveTitle('OrangeHRM')
    expect(await page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})