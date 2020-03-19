import { AppPage } from './app.po';
import {browser, By, element, logging, protractor, ProtractorBrowser} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    const inputElem = await element(By.css('input[aria-label="input-1"]')).getWebElement();
    expect(await inputElem.isDisplayed()).toBeTruthy();
    await inputElem.clear();
    await inputElem.sendKeys('123123');
    await inputElem.sendKeys(protractor.Key.ENTER);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
