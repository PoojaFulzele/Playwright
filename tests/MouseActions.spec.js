const { test, expect } = require('@playwright/test')

test('Verify the double click',async({page}) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#doubleClickBtn').dblclick()
    await expect(page.locator('#doubleClickMessage')).toBeVisible()
    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click')
})

test('Verify the right click',async({page}) => {
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({button : 'right'})
    await expect(page.locator('#rightClickMessage')).toBeVisible()
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click')
    
})

test.only('Verify the mousehover',async({page}) => {
    await page.goto('https://webdriveruniversity.com/Actions/index.html')
    await page.getByText('Hover Over Me Third!').hover()
    await page.getByText('Link 1').nth(2).click()
    page.on('dialog',async simpleAlert =>{
        await expect(simpleAlert.message()).toContain('Well done you clicked on the link!')
        await simpleAlert.accept()
    })
    await page.waitForTimeout(3000)
})