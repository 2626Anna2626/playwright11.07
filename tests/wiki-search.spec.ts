import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';

test('Поиск по слову "Тестирование" и проверка заголовка', async ({ page }) => {
  const home = new WikiHomePage(page);
  await home.goto();
  await home.chooseLanguage();

  // Найти поле поиска и ввести "Тестирование"
  const searchInput = page.locator('input[name="search"]');
  await searchInput.fill('Тестирование');
  await searchInput.press('Enter');

  // Клик по первой подходящей ссылке (обычно это первая статья)
  const firstResult = page.locator('.mw-search-result-heading a').first();
  await firstResult.click();

  // Проверка заголовка статьи
  const heading = await page.locator('#firstHeading').textContent();
  console.log('Заголовок статьи:', heading);
  expect((heading ?? '').trim()).toBe('Тест');
});
