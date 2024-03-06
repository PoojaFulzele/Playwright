const { test, expect } = require('@playwright/test')
const exp = require('constants')


test('Radio buttons in Playwright',async({page}) =>{
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('input[id="vfb-7-1"]')).not.toBeChecked()
    await page.locator('input[id="vfb-7-1"]').check()
    await expect(page.locator('input[id="vfb-7-1"]')).toBeChecked()
    await page.locator('input[id="vfb-7-2"]').check()
    await expect(page.locator('input[id="vfb-7-1"]')).not.toBeChecked()
})

test('Checkbox in Playwright',async({page}) => {
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('input[id="vfb-6-0"]')).not.toBeChecked()
    await page.locator('input[id="vfb-6-0"]').check()
    await expect(page.locator('input[id="vfb-6-0"]')).toBeChecked()

})

test.only('Checkbox in Playwright using Click method',async({page}) => {
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await page.locator('input[id="vfb-6-0"]').click()
    await expect(page.locator('input[id="vfb-6-0"]')).toBeChecked()

})