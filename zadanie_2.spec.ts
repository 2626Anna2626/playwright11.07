import { test, expect } from '@playwright/test';

test('блок “Избранная статья”', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await page.getByRole('link', { name: 'Русский' }).click();
  await page.getByRole('link', { name: 'Избранные статьи', exact: true }).click();
  const heading = page.locator('#firstHeading');
  await expect(heading).toHaveCount(1);
  await expect(heading).not.toHaveText('', { ignoreCase: true });
  const paragraphs = page.locator('p');
  const count = await paragraphs.count();
  expect(count).toBeGreaterThan(0);
});
