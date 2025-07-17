import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false, // запускать тесты с видимым браузером
        screenshot: 'only-on-failure', // делать скриншоты при ошибках
        video: 'retain-on-failure', // сохранять видео только при ошибках
        baseURL: 'https://example.com', // можно указать базовый URL
    },
});

/*
Объяснение:
• headless: false — отключает режим без окна (по умолчанию браузер
скрыт) true – включает режим без окна
• screenshot и video — полезны для анализа неудачных тестов
• baseURL —это базовый адрес сайта, с которым вы работаете.
Указав его в конфигурации, вы можете писать в тестах
относительные пути вместо полного URL.
Пример:
В конфиге указано:
• baseURL: 'https://example.com'
Теперь в тесте вы можете делать:
• await page.goto('/about');
А Playwright автоматически сделает переход на:
• https://example.com/about
Если базовый URL прописан, но вы хотите попасть на главную страницу:
• await page.goto('/');
*/
