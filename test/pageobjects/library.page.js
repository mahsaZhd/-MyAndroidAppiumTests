class LibraryPage {
    get pageHeader() {
        // Selector identifying the Library screen (e.g. title/toolbar)
        return $('android=new UiSelector().className("android.view.View").instance(8)');
        // Alternative: $('id=com.yourapp.package:id/toolbar_title')
    }

    async isLoaded() {
        await this.pageHeader.waitForDisplayed({ timeout: 10000 });
        return await this.pageHeader.isDisplayed();
    }
}

export default new LibraryPage();
