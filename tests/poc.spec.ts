import { test, expect } from '@playwright/test'

import { loadMarketplaceURL, loginMarketplaceURL } from './helpers'

test.describe('Marketplace tests', () => {
  test.beforeEach(async ({ page }) => {
    await loadMarketplaceURL(page)
    await loginMarketplaceURL(page)
  })
  test('Check if personalised welcome message is shown', async ({page}) => {
    await page.locator('text=My Marketplace').click();
    await expect(page.locator("text=Welcome, Bart Heijs!")).toBeVisible()

  })
})

// await page.click('.mx-name-menuBar1-7') // Workshop visits menu butten
//     const createWsvBtn = await page.locator('.mx-name-actionButton2') // Create new wsv button
//     await expect(createWsvBtn).toBeVisible
//     await page.click('.mx-name-actionButton2')
//     const newWsvTitel = await page.locator('#mxui_widget_Window_1_caption') // popup title
//     await expect(newWsvTitel).toBeVisible
//     await page.click('.select2-selection__rendered')
//     await page.type('.select2-search__field', '2410')
//     await page.click('.select2-results__option :text("2410")')
//     await page.click('.mx-name-referenceSelector1 .mx-compound-control');
    // await page.selectOption('[value="46443371157259341"]', '{ label: "BuzzFix B.V." }');
    // await page.selectOption('#408.Portal.Werkplaatsbezoek_Registreren.referenceSelector1_jqj_1000', '{ label: "BuzzFix B.V." }');