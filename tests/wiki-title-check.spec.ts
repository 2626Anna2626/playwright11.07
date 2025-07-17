import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';

test('Проверка заголовка главной страницы Википедии', async ({ page }) => {
  const home = new WikiHomePage(page);
  await home.goto();
  await home.chooseLanguage(); // по умолчанию "Русский"

  // Проверим, что заголовок страницы содержит "Википедия"
  await expect(page).toHaveTitle(/Википедия/);
});
