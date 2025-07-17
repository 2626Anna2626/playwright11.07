import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';
import fs from 'fs';
import path from 'path';

test('Сделать скриншот случайной статьи с названием из заголовка', async ({ page }) => {
  const home = new WikiHomePage(page);
  await home.goto();
  await home.chooseLanguage();

  const wiki = new WikiMainPage(page);
  await wiki.openRandomArticle();

  const title = await page.locator('#firstHeading').textContent();
  expect(title?.trim()).not.toBe('');

  const safeTitle = (title ?? 'article')
    .replace(/[\\/:*?"<>|]/g, '') // удаляем запрещённые символы в имени файла
    .replace(/\s+/g, '_')         // заменяем пробелы на _
    .slice(0, 50);                // ограничим длину, чтобы избежать ошибок

  const filePath = path.join('screenshots', `${safeTitle}.png`);

  await page.screenshot({ path: filePath, fullPage: true });
  console.log(`Скриншот сохранён: ${filePath}`);
});

/*
#firstHeading — это заголовок статьи.
replace(/[\\/:*?"<>|]/g, '') — удаляет символы, которые нельзя использовать в имени файла.
replace(/\s+/g, '_') — заменяет пробелы подчёркиванием.
slice(0, 50) — ограничивает длину названия, чтобы избежать ошибок в Windows/macOS.
fullPage: true — делает скриншот всей страницы, а не только видимой части.
*/