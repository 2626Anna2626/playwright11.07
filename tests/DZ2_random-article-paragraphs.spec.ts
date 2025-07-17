import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';

test('Случайная статья содержит хотя бы один непустой <p>', async ({ page }) => {
  const home = new WikiHomePage(page);
  await home.goto();
  await home.chooseLanguage();

  const wiki = new WikiMainPage(page);
  await wiki.openRandomArticle();

  // Получаем все параграфы
  const paragraphs = await page.locator('p');

  // Считаем только те <p>, в которых есть непустой текст
  const count = await paragraphs.evaluateAll((nodes) =>
    nodes.filter((node) => (node.textContent ?? '').trim().length > 0).length
  );

  console.log('Количество параграфов с текстом:', count);
  expect(count).toBeGreaterThan(0);
});


/*
page.locator('p') — находит все теги <p>.
evaluateAll(...) — позволяет перебрать их все в браузере и отфильтровать только те, где есть непустой текст.
Затем мы проверяем, что таких элементов больше нуля.
*/
