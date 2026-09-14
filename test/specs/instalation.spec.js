// test/specs/installation.spec.js
const NotavaaWebPage = require('../pageobjects/notavaaWeb.page');
const SplashPage = require('../pageobjects/splash.page');

const APP_ID = 'persiana.sol.notavaa';

describe('@TC-001 @Installation: APK Download and Splash Screen', () => {

    it('should download APK successfully and display splash screen', async () => {
        // Given: کاربر در وب‌سایت Notavaa است
        await NotavaaWebPage.openWebsite('https://notavaa.com');

        // When: روی لینک دانلود APK کلیک می‌کند
        await NotavaaWebPage.tapDownloadApk();

        // Then: فایل APK باید با موفقیت دانلود شود
        const isDownloaded = await NotavaaWebPage.isApkDownloaded();
        await expect(isDownloaded).toBe(true);

        // When: کاربر فایل دانلود شده را باز می‌کند
        // (نصب از قبل انجام شده یا از طریق intent باز می‌شود)
        await SplashPage.launchApp();

        // Then: اسپلش اسکرین (لوگو) باید نمایش داده شود
        await expect(SplashPage.splashLogo).toBeDisplayed();
    });

});
