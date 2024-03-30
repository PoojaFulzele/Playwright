const { test, expect } = require('@playwright/test')

test('Verifying the datepicker',async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').fill('03/29/2024')
    await page.waitForTimeout(7000)
    await expect(page.locator('.ui-datepicker-month')).toContainText('March')
})

test.only('Handling the datepicker',async({page}) =>{
    await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
    const year = '2025'
    const month = 'April'
    const date = '25'
    await page.locator('#datepicker').click()
    console.log(`${month} ${year}`)
    await page.waitForTimeout(7000)

    while(true){
        let monthyear = await page.locator('[class="datepicker-switch"]').first().textContent()
        //console.log(monthyear)
        await page.waitForTimeout(7000)

        if(monthyear === `${month} ${year}`){
            break
        }
        await page.locator('th[class="next"]').first().click() 
       // console.log(monthyear)
        await page.locator('td[class="day"]').nth('25').click()
       }
       await page.waitForTimeout(7000)
    
})