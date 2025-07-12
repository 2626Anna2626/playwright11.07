import { Page } from '@playwright/test';

export class WikiHomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async chooseLanguage(language = 'Русский') {
    await this.page.getByRole('link', { name: language }).click();
  }
}