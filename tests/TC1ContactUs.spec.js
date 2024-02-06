const { test, expect } = require('@playwright/test')

/*test ('verify contactus functionality',async ({page}) =>{
    await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('input[name="first_name"]').fill('Pooja')
    await page.locator('input[name="last_name"]').fill('Fulzele')
    await page.locator('input[name="email"]').fill('poojafulzele@gmail.com')
    await page.locator('textarea[name="message"]').fill('I am learning Js')
    await page.locator('input[type="submit"]').click()
    await page.waitForTimeout(4000)
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})*/

test('verify contactus functionality invalid email', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('input[name="first_name"]').fill('Pooja')
    await page.locator('input[name="last_name"]').fill('Fulzele')
    await page.locator('input[name="email"]').fill('poojafulzele.com')
    await page.locator('textarea[name="message"]').fill('I am learning Js')
    await page.locator('input[type="submit"]').click()
    await page.waitForTimeout(4000)
    await expect(page.locator('body')).toBeVisible()
    await expect(page.locator('body')).toHaveText('Error: Invalid email address')
})


test.only('verify reset button functionality', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('input[name="first_name"]').fill('Pooja')
    await page.locator('input[name="last_name"]').fill('Fulzele')
    await page.locator('input[name="email"]').fill('Pooja')
    await page.locator('textarea[name="message"]').fill('I am learning Js')
    await page.locator('input[type="reset"]').click()
    const firstNamefield = await page.locator('input[name="first_name"]').inputValue();
    console.log(firstNamefield)
    await expect(firstNamefield).toBe('')
    await expect(firstNamefield).toEqual('')
})