class BottomNav {
    // Selectors using UiAutomator2 / accessibility id / resource-id
    // Adjust the exact resource-id or accessibility-id to match your app
    get profileTabButton() {
        return $('android=new UiSelector().description("Pro Profile Tab 3 of 3")');
        // Alternative examples:
        // return $('~Profile'); // Accessibility ID
        // return $('id=com.yourapp.package:id/nav_profile');
    }

    get libraryTabButton() {
        return $('android=new UiSelector().description("My List Tab 1 of 3")');
    }

    async tapProfileButton() {
        await this.profileTabButton.waitForDisplayed({ timeout: 10000 });
        await this.profileTabButton.click();
    }
}

export default new BottomNav();
