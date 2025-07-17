import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';

test('Заголовок случайной статьи отображается на странице', async ({ page }) => {
  console.log('🔥 Тест стартовал');
  // Инициализируем Page Objects
  const homePage = new WikiHomePage(page);
  const mainPage = new WikiMainPage(page);

  // Pre-condition: открыть сайт и выбрать язык
  await homePage.goto();
  await homePage.chooseLanguage(); // по умолчанию "Русский"

  // Перейти к случайной статье
  await mainPage.openRandomArticle();

  // Проверка: заголовок отображается
  const titleLocator = page.locator('#firstHeading');
  await expect(titleLocator).toBeVisible();
});