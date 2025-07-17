import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';

test('Проверка блока "Избранная статья" на главной странице русской Википедии', async ({ page }) => {
  const home = new WikiHomePage(page);
  await home.goto();
  await home.chooseLanguage(); // переходит на ru.wikipedia.org

  // Найдём блок по заголовку "Избранная статья"
  const featuredHeading = page.getByRole('heading', { name: 'Избранная статья' });
  await expect(featuredHeading).toBeVisible();

  // Поднимемся к родительскому блоку (секция избранной статьи)
  const featuredBlock = featuredHeading.locator('..').locator('..');

  // Проверка заголовка (например, жирный текст в первом абзаце)
  const title = await featuredBlock.locator('b').first().textContent();
  expect((title ?? '').trim()).not.toBe('');

  // Проверка наличия хотя бы одного абзаца с текстом
  const paragraphCount = await featuredBlock.locator('p').evaluateAll(
    (nodes) => nodes.filter((n) => (n.textContent ?? '').trim().length > 0).length
  );
  expect(paragraphCount).toBeGreaterThan(0);

  console.log('Заголовок:', title);
  console.log('Абзацев:', paragraphCount);
});
