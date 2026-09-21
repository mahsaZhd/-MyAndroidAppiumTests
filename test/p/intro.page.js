javascript
// test/pageobjects/intro.page.js
class IntroPage {
    get welcomeTitle() {
        // سلکتور نیتیو اندروید (Appium)
        return $('~welcome_text'); // یا $('id=persiana.sol.notavaa:id/intro_title')
    }

    get getStartedButton() {
        return $('~get_started_btn');
    }

    async isIntroDisplayed() {
        return await this.welcomeTitle.isDisplayed();
    }
}

module.exports = new IntroPage();



