describe('Protractor Demo App', () => {

  it('should have a title', () => {
    browser.get('https://finviz.com/');
    expect(browser.getTitle()).toEqual('FINVIZ.com - Stock Screener');
  });

  it('should click on screener', () => {
    let screener = element(By.xpath('/html/body/table[2]/tbody/tr/td/table/tbody/tr/td[3]/a'));
    screener.click();
  });

  it('should select market cap as mega', () => {
    let EC = protractor.ExpectedConditions;
    let marketCap = element(By.id('fs_cap'));
    browser.wait(EC.elementToBeClickable(marketCap), 5000);
    marketCap.click();
    marketCap.$('[value="mega"]').click();
  })

  it('should search for Amazon stock', () => {
    let ticketInput = element(By.id('tickersInput'));
    ticketInput.sendKeys('AMZN');
    ticketInput.sendKeys(protractor.Key.ENTER);
    browser.sleep(3500)
  });

});