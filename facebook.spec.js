class FacebookLoginPage {
  
    constructor() {
        this.username = element(By.id('email'));
        this.password = element(By.id('pass'));
    }
  
    gotoLoginPage() {
        browser.get('https://facebook.com/');
    }
  
    login(info) {
       this.username.sendKeys(info.username);
       this.password.sendKeys(info.password);
       this.password.sendKeys(protractor.Key.ENTER);
    }
  }
  
  describe('Protractor Demo App', () => {
    it('should log into facebook', () => {
  
      let loginPage = new FacebookLoginPage();
      loginPage.gotoLoginPage();
      
      let info = {
        username: 'random',
        password: 'random'
      };
  
      loginPage.login(info);
    });

    // it('should pass', () => {
    //     expect(1).toBe(1);
    // })
  
    // it('should pass', () => {
    //     expect(2).toBe(1);
    // })

    // it('should pass', () => {
    //     expect(1).toBe(1);
    // })

    // it('should pass', () => {
    //     expect(1).toBe(1);
    // })
  });