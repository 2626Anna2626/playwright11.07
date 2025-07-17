import { test, expect } from '@playwright/test';

test('Простой тест — проверка заголовка', async ({ page }) => { 
await page.goto('https://example.com');
await expect(page).toHaveTitle('Example Domain');
console.log("This is first commit in new branch")
});

/* Что происходит в этом тесте:
• test() — функция для создания теста.
• page — объект, который представляет браузерную вкладку.
• goto() — переход по URL.
• expect().toHaveTitle() — проверка, что у страницы заголовок
"Example Domain"
*/