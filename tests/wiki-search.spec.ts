import { test, expect } from '@playwright/test';

test('Поиск статьи "тестирование" в Википедии', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await page.getByRole('link', { name: 'Русский' }).click();
  const searchInput = page.getByPlaceholder('Искать в Википедии');
  await searchInput.fill('тестирование');
  await searchInput.press('Enter');
  const firstResultLink = page.locator('.mw-search-results li a').first();
  const href = await firstResultLink.getAttribute('href');
  if (href) {
    await page.goto('https://ru.wikipedia.org' + href);
  } else {
    throw new Error('Не удалось получить ссылку на статью');
  }
  const title = await page.locator('#firstHeading').textContent();
  console.log('Заголовок:', title);
  expect(title?.toLowerCase()).toContain('тестирование');
  console.log("This is first commit in new branch")
});