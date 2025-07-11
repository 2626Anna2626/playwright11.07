import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // запускать с открытым браузером
    screenshot: 'only-on-failure', // делать скриншоты только при ошибках
    video: 'retain-on-failure', // сохранять видео при сбоях
    baseURL: 'https://www.wikipedia.org', // начальная страница
  },
});