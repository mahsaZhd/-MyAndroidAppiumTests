class ProfilePage {
    get profileHeader() {
        // Selector verifying the user has landed on the Profile screen
        return $('android=new UiSelector().text("Profile").className("android.view.View").instance(2)');
        // Alternative: $('id=com.yourapp.package:id/profile_title')
    }

  

    async isLoaded() {
        await this.profileHeader.waitForDisplayed({ timeout: 10000 });
        return await this.profileHeader.isDisplayed();
    }
}

export default new ProfilePage();
