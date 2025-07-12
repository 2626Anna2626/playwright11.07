import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';

test('Заголовок случайной статьи видим', async ({ page }) => {
  const home = new WikiHomePage(page);
  await home.goto();
  await home.chooseLanguage();

  const wiki = new WikiMainPage(page);
  await wiki.openRandomArticle();

  await expect(page.locator('#firstHeading')).toBeVisible();
});