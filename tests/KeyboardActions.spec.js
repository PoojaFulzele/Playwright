const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('verify the keyboard actions', async({page}) => {
     await page.goto('https://gotranscript.com/text-compare')
     await page.keyboard.down('PageDown')
     await page.locator('textarea[name="text1"]').fill('Hello!!!! I am learning JS')
     await page.keyboard.press('Control+A')
     await page.keyboard.press('Control+C')
     await page.keyboard.down('Tab')
     //await page.locator('textarea[name="text2"]').click()
     await page.keyboard.press('Control+V')
     await page.keyboard.press('Control+A')
     await page.keyboard.down('Delete')
     //await page.keyboard.press('Shift+Digit2')
     await page.waitForTimeout(3000)


})