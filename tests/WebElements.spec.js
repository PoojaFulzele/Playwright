const { test, expect } = require('@playwright/test');

test('click on the element', async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('[name= "first_name"]',"Pooja");
    await page.fill('[name= "last_name"]',"Fulzele");
    await page.fill('[name= "email"]',"poojafulzele@gmail.com");
    await page.fill('[name= "message"]',"I am learning js");
    await page.click('[type = "submit"]') // click()
    await page.waitForSelector('h1')
    

});

test('typing into the input element', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('[name= "first_name"]',"Pooja");
    await page.fill('[name= "last_name"]',"Fulzele"); // type
    await page.fill('[name= "email"]',"poojafulzele@gmail.com");
    await page.fill('[name= "message"]',"I am learning js");
    await page.click('[type = "submit"]') // click()
    let p = await page.$('[type = "submit"]')
    p.click()
    await page.waitForSelector('h1')
});

test('clearing the input field', async ({ page }) => {

    // await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    // await page.fill('[name= "first_name"]',"Pooja");
    // await page.fill('[name= "first_name"]','');
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('[name= "first_name"]',"Pooja");
    await page.click('[type="reset"]')
    //let text = '' // expected
    let expectText = await page.$eval('[name= "first_name"]',x =>x.value)
    expect(expectText).toBe('') 
});

test.only('getting the text value',async({page}) =>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
   // let text = await page.$eval('h1',(el)=>el.textContent())
   // assert.strictEqual(text,'Dropdown Menu(s), Checkboxe(s) & Radio Button(s)')
    const textContentVal= await page.$eval('h1',(el)=>el.textContent())
    assert.strictEqual(textContentVal,"Dropdown Menu(s), Checkboxe(s) &amp; Radio Button(s)")
});