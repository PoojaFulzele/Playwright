//Static dropdown
//dynamic dropdown or Autosuggestive dropdown
const { test, expect } = require('@playwright/test')
const exp = require('constants')


test('Verify the Static dropdown', async({page}) => {
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('4')
    await expect(page.locator('p[class="subtitle"]')).toBeVisible()
    await expect(page.locator('p[class="subtitle"]')).toHaveText('You have selected Pine Apple')
    await page.waitForTimeout(3000)
    await page.locator('#superheros').selectOption('ih')
    await expect(page.locator('[class="subtitle"]').last()).toBeVisible()
    await page.waitForTimeout(3000)
    await page.keyboard.down('PageDown')
    await page.locator('#lang').selectOption('py')
    await expect(page.locator('#lang > option[value="py"]')).toHaveText('Python')
    await page.waitForTimeout(3000)
    await page.locator('#country').selectOption('India')
    await expect(page.locator('#country > option[value="India"]')).toHaveText('India')
    await page.waitForTimeout(3000)


})
