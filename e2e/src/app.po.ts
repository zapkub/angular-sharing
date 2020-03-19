import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
}
