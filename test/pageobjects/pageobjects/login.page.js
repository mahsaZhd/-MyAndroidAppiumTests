class LoginPage {
    get phoneInput() {
        return $('android=new UiSelector().resourceId("android.widget.EditText")');
    }

    get countryCodeButton() {
        return $('android=new UiSelector().resourceId("Country code")');
    }

    get loginWithCodeButton() {
        return $('android=new UiSelector().resourceId("Log in with code")');
    }

    async waitForLoginScreen() {
        await this.phoneInput.waitForDisplayed({ timeout: 10000 });
    }

    async enterPhoneNumber(phoneNumber) {
        await this.phoneInput.setValue(phoneNumber);
    }

    async selectCountryCode(countryCode) {
        await this.countryCodeButton.click();

        const countryOption = $(
            `android=new UiSelector().text("${countryCode}")`
        );

        await countryOption.waitForDisplayed({ timeout: 10000 });
        await countryOption.click();
    }

    async tapLoginWithCode() {
        await this.loginWithCodeButton.click();
    }
}

module.exports = new LoginPage();
