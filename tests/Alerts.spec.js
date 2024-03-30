const { test, expect } = require('@playwright/test')
const exp = require('constants')
const { on } = require('events')

    //js                   playwright
    //SimpalAlert          alert
    //ConfirmAlert         confirm
    //PromptAlert          prompt

test('Handling js simple alert', async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async simpleAlert =>{
        await expect(simpleAlert.message()).toContain('I am a JS Alert')
        await expect(simpleAlert.type()).toContain('alert')
        simpleAlert.accept()
      })
    await page.locator('button[onclick="jsAlert()"]').click()
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    await page.waitForTimeout(4000) 

})

test('Handling js confirm alert', async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog',async confirmAlert =>{
        await expect(confirmAlert.message()).toContain('I am a JS Confirm')
        await expect(confirmAlert.type()).toContain('confirm')
        //console.log(confirmAlert.message())
        //console.log(confirmAlert.type())
        //confirmAlert.accept()
        confirmAlert.dismiss()
     })
    await page.locator('button[onclick="jsConfirm()"]').click()
    //await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
    await page.waitForTimeout(4000)


})


test.only('Handling js prompt alert', async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async promptAlert =>{
        await expect(promptAlert.message()).toContain('I am a JS prompt')
        await expect(promptAlert.type()).toContain('prompt')
        //console.log(promptAlert.message())
        //console.log(promptAlert.type())
        //promptAlert.accept('Pooja')
        promptAlert.dismiss()
    })
    await page.locator('button[onclick="jsPrompt()"]').click()
    //await expect(page.locator('#result')).toHaveText('You entered: Pooja')
    await expect(page.locator('#result')).toHaveText('You entered: null')
    await page.waitForTimeout(4000)


})