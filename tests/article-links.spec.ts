import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';

test('Случайная статья содержит хотя бы одну внутреннюю ссылку', async ({ page }) => {
  const home = new WikiHomePage(page);
  await home.goto();
  await home.chooseLanguage();

  const wiki = new WikiMainPage(page);
  await wiki.openRandomArticle();

  const internalLinks = await page.locator('a[href^="/wiki/"]').elementHandles();
  expect(internalLinks.length).toBeGreaterThan(0);
});