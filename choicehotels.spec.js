class ChoiceHotels {

    constructor() {
        this.username = element(By.id('email'));
        this.password = element(By.id('pass'));
    }

    gotoLoginPage() {
        browser.get('https://choicehotels.com/');
        expect(browser.getTitle)
    }
}

describe('Protractor Demo App', () => {

    it('Should have a title', () => {
        browser.get('https://www.choicehotels.com/?refd=choicehotesl.com');
        browser.sleep(3000);
        expect(browser.getTitle()).toEqual('Choice Hotels® – Find Hotel Rooms & Reservations');
    });

    it('Should open choice hotels web page', () => {
        let loginPage = new ChoiceHotels();
        loginPage.gotoLoginPage();
    })

});

