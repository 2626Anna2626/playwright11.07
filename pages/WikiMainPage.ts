import { Page } from '@playwright/test';

export class WikiMainPage {
  constructor(private page: Page) {}

  async openRandomArticle() {
    await this.page.getByRole('link', { name: 'Случайная статья' }).click();
  }
}