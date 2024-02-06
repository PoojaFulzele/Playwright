// getByAltText
// getByLabel
// getByPlaceholder
// getByRole
// getByTestId
// getByText
// getByTitle

const { test, expect } = require('@playwright/test')

test('get element by getByAltText',async({page}) =>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = await page.getByAltText('letcode')
    await expect(ele).toBeVisible()
})

test('get element by getByLabel',async({page}) =>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = await page.getByLabel('main navigation')
    await expect(ele).toBeVisible()

})

test('Get element by getByPlaceholder',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.getByPlaceholder('First Name').fill('Pooja')
    await page.waitForTimeout(4000)

})

test('Get element by getByRole',async({page})=>{
    await page.goto('https://letcode.in/radio')
    await page.getByRole('checkbox',{name : 'I agree to the'}).check()
    await page.waitForTimeout(4000)

})

test('Get element by getByText',async({page})=>{
    await page.goto('https://letcode.in/radio')
    await page.getByText(' I agree to the ').check()
    await expect(page.getByText('Log in')).toBeVisible()
    await page.waitForTimeout(4000)
})

test('Get element by getByTitle',async({page})=>{
    await page.goto('https://letcode.in/radio')
    let ele = await page.getByTitle('Koushik Chatterjee')
    await expect(ele).toHaveText('Koushik Chatterjee')
    await expect(ele).toBeVisible()
})

test.only('Get element by getByTestId',async({page})=>{
    await page.goto('https://letcode.in/radio')
    await page.getByTestId('global-nav-search-icon').click()
    await expect(page.locator('#global-nav-search-icon')).toBeVisible()
    await page.locator('#global-nav-search-icon').fill('Minskole')
    await page.waitForTimeout(4000)

})