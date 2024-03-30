const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('Drag and Drop using inbuild command', async({page}) =>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const rome = await page.locator('#box6')
    const italy = await page.locator('#box106')
    await rome.dragTo(italy)
    expect(await page.locator('#box6'))
    .toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)

})

test('Drag and Drop using mouse actions', async({page}) =>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box6').hover()
    await page.mouse.down()
    await page.locator('#box106').hover()
    await page.mouse.up()
    expect(await page.locator('#box6'))
    .toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)
})

test('Drag and Drop for Spain', async({page}) =>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const madrid = await page.locator('#box7')
    const spain = await page.locator('#box107')
    await madrid.dragTo(spain)
    expect (await page.locator('#box7'))
    .toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)


})

test('Drag and Drop for Norway', async({page}) =>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const oslo = await page.locator('#box1')
    const norway = await page.locator('#box101')
    await oslo.dragTo(norway)
    expect(await page.locator('#box1'))
    .toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)

})

test.only('Drag and Drop for Sweden', async({page}) =>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const stockholm = await page.locator('#box2')
    const sweden = await page.locator('#box102')
    await stockholm.dragTo(sweden)
    expect(await page.locator('#box2'))
    .toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)

})