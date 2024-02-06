const { test, expect } = require('@playwright/test')

test('Verifying the locators and assertion',async({page}) =>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')


    //single Element

    let fstname = await page.$('input[name="first_name"]')
    await expect(fstname).not.toBeNull()

    let fstname1 = await page.locator('input[name="first_name"]')
    await expect(fstname1).toBeVisible()
    await expect(fstname1).toHaveCount(1)

    //multiple Element
    let multiEle = await page.$$('input[type="text"]')
    await expect(multiEle.length).toBe(3)

    
    let multiEle1 = await page.locator('input[type="text"]').count()
    await expect(multiEle1).toBe(3)
    await expect(multiEle1).toEqual(3)


    //finding element by class name
    let byclassName = await page.$$('.text-center')
    await expect(byclassName.length).toBe(2)

    let byclassName1 = await page.locator('.text-center').count()
    await expect(byclassName1).toBe(2)
    await expect(byclassName1).toEqual(2)

       
    //finding element by Id

    let byId = await page.$("#contact_form")
    await expect(byId).not.toBeNull()


    //finding element by Css selector
    let byCss= await page.$("input[name = 'first_name']")
    await expect(byCss).not.toBeNull()


    //finding element by tagname
    let bytagName= await page.locator('h2').innerText()
    await expect(bytagName).toEqual("CONTACT US")















})