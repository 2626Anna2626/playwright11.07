import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';

test('Случайная статья содержит хотя бы один параграф', async ({ page }) => {
  const home = new WikiHomePage(page);
  await home.goto();
  await home.chooseLanguage();

  const wiki = new WikiMainPage(page);
  await wiki.openRandomArticle();

  const paragraphs = await page.locator('p').allTextContents();
  expect(paragraphs.filter(p => p.trim().length > 0).length).toBeGreaterThan(0);
});