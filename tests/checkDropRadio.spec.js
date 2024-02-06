const { test, expect } = require('@playwright/test');
const assert = require ('assert');

test('Dropdown',async({page}) =>{

await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
await page.selectOption('#dropdowm-menu-1','Python')
const av = await page.$eval('#dropdowm-menu-1',(el) => el.value)
assert.strictEqual(av,'python')
await page.selectOption('#dropdowm-menu-2','Eclipse')
const avtwo = await page.$eval('#dropdowm-menu-2',(el) => el.value)
assert.strictEqual(avtwo,'eclipse')

});

test('Checkbox',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.check('input[value="option-1"]')
    await page.uncheck('input[value="option-3"]')
    const cb = await page.$eval('input[value="option-1',(el) => el.checked)
    const cb2 = await page.$eval('input[value="option-3',(el) => el.checked)
    assert.strictEqual(cb,true)
    assert.strictEqual(cb2,false)


});

test.only('Radiobutton',async({page})=>{

    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.check('input[value="green"]')
    const rb = await page.$eval('input[value="green"]',(el) => el.checked)
    assert.strictEqual(rb,true)
    const rb2 = await page.$eval('input[value="blue"]',(el) => el.checked)
    assert.strictEqual(rb2,false)
    

})