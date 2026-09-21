class LibraryPage {
    get screen() {
        return $('~library_screen');
    }

    async waitForDisplayed() {
        await this.screen.waitForDisplayed({ timeout: 10000 });
    }
}

module.exports = new LibraryPage();
