import { Page } from '@playwright/test'; // Импортируем тип страницы, как и раньше.

/** Главная страница русской Википедии */
export class WikiMainPage {
    constructor(private page: Page) {}
    /* Класс WikiMainPage представляет главную страницу уже русской
Википедии (https://ru.wikipedia.org).
Сохраняем объект page для работы. */

    /** Переход к случайной статье */
    async openRandomArticle() {
        await this.page.getByRole('link', { name: 'Случайная статья' }).click();
    }
    /* Метод openRandomArticle() ищет ссылку «Случайная статья» и
нажимает на неё.
Это вызывает переход на случайную статью.
Опять используем getByRole — он ищет ссылки, а не просто любые теги
(как locator()). */
}




