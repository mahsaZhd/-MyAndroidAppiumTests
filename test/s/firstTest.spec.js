describe('My First Notavaa Android Test', () => {
    it('should launch the app successfully', async () => {
        // Wait 5 seconds so you can see the app open on the emulator
        await driver.pause(5000);

        // Get the current package name running on the device
        const currentPackage = await driver.getCurrentPackage();
        console.log('App successfully launched! Current package is:', currentPackage);

        // Basic assertion: verify the app opened
        expect(currentPackage).not.toBeNull();
    });
});
