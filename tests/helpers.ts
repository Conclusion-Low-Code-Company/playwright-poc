import { test, expect } from '@playwright/test'

const marketplaceURL = 'https://oriongrip-planning-accp.mendixcloud.com/'
const username = 'bheijs@conclusion.nl'
const password = 'myPassword'

export async function loadMarketplaceURL(page) {
  await page.goto(marketplaceURL)
}

export async function loginMarketplaceURL(page) {
  // Go to https://marketplace.mendix.com/
  await page.goto('https://marketplace.mendix.com/');
  // Click text=Login
  await page.locator('text=Login').click();
  await expect(page).toHaveURL('https://login.mendix.com/oidp/login?ret=https://marketplace.mendix.com/');
  // Fill [placeholder="you\@company\.com"]
  await page.locator('[placeholder="you\\@company\\.com"]').fill(username);
  // Click [placeholder="Enter your password"]
  await page.locator('[placeholder="Enter your password"]').click();
  // Fill [placeholder="Enter your password"]
  await page.locator('[placeholder="Enter your password"]').fill(password);
  // Press Enter
  await page.locator('[placeholder="Enter your password"]').press('Enter');
  await expect(page).toHaveURL('https://marketplace.mendix.com/');
}