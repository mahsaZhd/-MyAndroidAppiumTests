class OtpPage {
    get otpFields() {
        return [
            $(
                'android=new UiSelector().className("android.widget.EditText").instance(0)'
            ),
            $(
                'android=new UiSelector().className("android.widget.EditText").instance(1)'
            ),
            $(
                'android=new UiSelector().className("android.widget.EditText").instance(2)'
            ),
            $(
                'android=new UiSelector().className("android.widget.EditText").instance(3)'
            ),
            $(
                'android=new UiSelector().className("android.widget.EditText").instance(4)'
            )
        ];
    }

    get loginButton() {
        return $(
            'android=new UiSelector().description("Log in to NotaAvaa")'
        );
    }

    async enterOtp(otp) {
        if (!/^\d{5}$/.test(otp)) {
            throw new Error(`Expected a 5-digit OTP, but received "${otp}"`);
        }

        for (let i = 0; i < this.otpFields.length; i++) {
            await this.otpFields[i].waitForDisplayed({ timeout: 10000 });
            await this.otpFields[i].setValue(otp[i]);
        }
    }

    async waitForLoginButtonEnabled() {
        await this.loginButton.waitForDisplayed({ timeout: 10000 });
        await this.loginButton.waitForEnabled({ timeout: 10000 });
    }

    async tapLoginButton() {
        await this.loginButton.click();
    }
}

module.exports = new OtpPage();
