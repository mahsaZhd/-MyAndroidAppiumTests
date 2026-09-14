// test/pageobjects/notavaaWeb.page.js
class NotavaaWebPage {

    // --- Selectors ---

    get downloadApkButton() {
        // دکمه یا لینک دانلود APK در سایت
        // می‌توانید از متن دکمه هم استفاده کنید:
        // return $('android=new UiSelector().text("Download APK")');
        return $('~download_apk_btn');
    }

    get downloadNotification() {
        // اعلان دانلود (notification) یا پیام موفقیت دانلود
        return $('~download_complete_notification');
    }

    // --- Actions ---

    async openWebsite(url = 'https://notavaa.com') {
        await browser.url(url);
    }

    async tapDownloadApk() {
        await this.downloadApkButton.waitForDisplayed({ timeout: 10000 });
        await this.downloadApkButton.click();
    }

    /**
     * بررسی موفقیت دانلود APK
     * (از طریق اعلان سیستم یا بررسی فایل در مسیر دانلود)
     */
    async isApkDownloaded() {
        // روش ۱: بررسی اعلان دانلود
        // await this.downloadNotification.waitForDisplayed({ timeout: 30000 });
        // return await this.downloadNotification.isDisplayed();

        // روش ۲ (پایدارتر): بررسی وجود فایل در مسیر دانلود با adb
        const result = await driver.executeScript('mobile: shell', [{
            command: 'ls /sdcard/Download/',
            args: []
        }]);
        return result.includes('.apk');
    }
}

module.exports = new NotavaaWebPage();
