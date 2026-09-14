const path = require('path');

exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android Emulator',
        // This automatically builds the absolute path to your APK:
        'appium:app': path.resolve('./apps/notavaa-rc-direct-2.0.4-rc.1+1.apk'),
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 240,
    }],
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
