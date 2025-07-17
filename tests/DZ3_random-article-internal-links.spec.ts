import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';

test('Случайная статья содержит хотя бы одну внутреннюю ссылку', async ({ page }) => {
  const home = new WikiHomePage(page);
  await home.goto();
  await home.chooseLanguage();

  const wiki = new WikiMainPage(page);
  await wiki.openRandomArticle();

  // Получаем все ссылки <a>, у которых href начинается с /wiki/
  const internalLinks = page.locator('a[href^="/wiki/"]');

  const count = await internalLinks.count();
  console.log('Внутренних ссылок найдено:', count);

  expect(count).toBeGreaterThan(0);
});

/*
Объяснение:
a[href^="/wiki/"] — CSS-селектор для всех ссылок <a>, у которых href начинается на /wiki/. Это стандартный формат внутренних ссылок в Википедии.
locator().count() — считает, сколько таких элементов найдено.
expect(count).toBeGreaterThan(0); — проверяет, что хотя бы одна внутренняя ссылка есть.
*/