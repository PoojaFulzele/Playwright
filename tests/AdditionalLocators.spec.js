const { test, expect } = require('@playwright/test');
const assert = require ('assert');

test('children elements',async({page}) =>{
     // single element
    // $
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let ele = await page.$('h1')
    console.log(await ele.innerText())

    //locator
    let ele2 = await page.locator('h1').innerText()
    console.log(ele2)

    //multiple elements
    let buttons = await page.$$('button')
    for (let button of buttons){
        let text = await button.textContent()
        console.log(text)
    }

    let buttonB = await page.locator('button')
    for(let i = 0; i < buttonB.length ; i++){
        console.log(buttonB.nth(i).innerText())
    }

    //filling operation
    await page.locator('input[name= "firstname"]').fill('Pooja')
    //await page.fill('input[name= "firstname"]','Pooja')

})