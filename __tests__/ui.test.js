const {
  Builder,
  By,
} = require('selenium-webdriver');

describe('headless browsing', () => {
  const driver = new Builder().forBrowser('firefox').build();
  it('Should change location', async (done) => {
    try {
      await driver.navigate().to('http://localhost:8000/');
      await driver.findElement(By.css('.bm-burger-button')).click();
      await driver.findElement(By.linkText('Information')).click();
      const url = await driver.getCurrentUrl();
      expect(url.toString()).toEqual('http://localhost:8000/btw17/');
      done();
    } finally {
      driver.quit();
    }
  }, 50000);
});