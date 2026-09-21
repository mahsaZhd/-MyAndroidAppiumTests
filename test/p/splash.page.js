// test/pageobjects/splash.page.js
const APP_ID = 'persiana.sol.notavaa';

class SplashPage {
    get splashLogo() {
        // لوگو/آیکون اسپلش در اپلیکیشن
        return $('~splash_logo'); // یا $('id=persiana.sol.notavaa:id/splash_image')
    }

    async launchApp() {
        await driver.activateApp(APP_ID);
    }

    async isSplashDisplayed() {
        await this.splashLogo.waitForDisplayed({ timeout: 10000 });
        return await this.splashLogo.isDisplayed();
    }
}

module.exports = new SplashPage();
