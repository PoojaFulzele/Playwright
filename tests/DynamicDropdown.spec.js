const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('Verify dynamic dropdown', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Pune', { delay: 1000 })
    await page.waitForSelector('.placeHolderMainText')
    let optionsCount = await page.locator('.placeHolderMainText').count()
    console.log(optionsCount)
    for (let i = 0; i < optionsCount; i++) {
        let resultText = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(resultText)
        if (resultText === 'Katraj') {
            await page.locator('.placeHolderMainText').nth(i).click()
            break

        }
    }
    await page.waitForTimeout(4000)

})

test.only('Verify dynamic dropdown2', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('#dest').fill('Mumbai', { delay: 4000 })
    await page.waitForSelector('.placeHolderMainText')
    let optionsCount2 = await page.locator('.placeHolderMainText').count()
    console.log(optionsCount2)
    for(let i = 0; i < optionsCount2 ; i++){
        let resultText2 = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(resultText2)
        if(resultText2 === 'Bandra'){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(7000)
    let assert = await page.locator('text[class="placeHolderMainText"]')
    await expect (assert).toHaveText('Bandra')


})