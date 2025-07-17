/*import { test, expect } from '@playwright/test';

test('Открыть случайную статью на Wikipedia и вывести заголовок', async ({ page
}) => {
    // Переход на главную страницу Wikipedia
    await page.goto('https://www.wikipedia.org');

    // Нажимаем на ссылку "Русский", чтобы открыть русскую версию сайта
    await page.getByRole('link', { name: 'Русский' }).click();

    // Нажимаем на "Случайная статья"
    await page.getByRole('link', { name: 'Случайная статья' }).click();

    // Ждём загрузку новой страницы и получаем заголовок
    const articleTitle = await page.locator('#firstHeading').textContent();

    // Выводим заголовок в консоль
    console.log('Заголовок статьи:', articleTitle);

    // Проверка: заголовок должен существовать
    expect(articleTitle).not.toBeNull();
});


Объяснение:
• getByRole('link', { name: '...' }) — доступ к ссылке по её названию
(удобный способ искать элементы без указания CSS).
• #firstHeading — это ID главного заголовка статьи.
• textContent() — возвращает текст элемента (в нашем случае —
заголовок статьи).
• console.log() — просто выводит текст в консоль терминала.
• expect().not.toBeNull() — простая проверка, что заголовок вообще
найден.
*/

import { test, expect } from '@playwright/test';
/* Импортируем функции test и expect, чтобы писать тесты.
• test — основной блок, внутри которого описывается логика.
• expect — библиотека утверждений: проверка, что результат соответствует ожиданию. */
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';
/* Импортируем наши Page Object классы. Они лежат в папке pages, на уровень выше относительно tests. */

test('Случайная статья на Википедии — вывод заголовка', async ({ page }) => {
    /* Начинается тест с описанием.
    Функция принимает объект { page } — это автоматически создаваемая вкладка браузера от Playwright.
    Тест асинхронный (async), потому что браузерные действия требуют ожидания. */
    // Шаг 1: открываем wikipedia.org и выбираем русский язык
    const home = new WikiHomePage(page);
    await home.goto();
    await home.chooseLanguage(); // «Русский» по умолчанию
    /* Создаём объект home, используя наш WikiHomePage, и передаём ему page.
    • home.goto() — открывает главную Wikipedia.
    • home.chooseLanguage() — выбирает язык (по умолчанию "Русский"). */

    // Шаг 2: кликаем «Случайная статья»
    const wiki = new WikiMainPage(page);
    await wiki.openRandomArticle();
    /* Создаём объект wiki, представляющий главную страницу русской Википедии.
    • wiki.openRandomArticle() — кликаем по ссылке "Случайная статья", и открывается новая страница с заголовком. */

    // Шаг 3: извлекаем заголовок статьи прямо здесь, в тесте
    const title = await page.locator('#firstHeading').textContent();
    /* На открывшейся странице ищем элемент с id="firstHeading" — это главный заголовок статьи.
    textContent() возвращает внутренний текст заголовка (например, "Антарктика"). */
    console.log('Заголовок статьи:', title);
    /* Выводим заголовок в консоль. Это полезно для отладки и логов в CI. */

    // Шаг 4: проверяем, что заголовок не пустой
    expect(title?.trim()).not.toBeNull();
    /* Проверяем, что заголовок существует и не пустой.
    trim() убирает пробелы по краям.
    ?. — проверка, что title не null или undefined.
    expect(...).not.toBe('') — утверждение, что заголовок не пустой. */
});







