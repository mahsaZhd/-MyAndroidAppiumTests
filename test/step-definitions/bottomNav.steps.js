import { Given, When, Then } from '@wdio/cucumber-framework';


import libraryPage from '../pageobjects/library.page.js';
import bottomNav from '../pageobjects/bottomNav.page.js';
import profilePage from '../pageobjects/profile.page.js';

Given('the user is on the library page', async () => {
    // Verify that the Library screen is displayed before proceeding
    const isLibraryDisplayed = await libraryPage.isLoaded();
    expect(isLibraryDisplayed).toBe(true);
});

When('the user taps the Profile button', async () => {
    await bottomNav.tapProfileButton();
});

Then('the user should be redirected to the Profile page', async () => {
    const isProfileDisplayed = await profilePage.isLoaded();
    expect(isProfileDisplayed).toBe(true);
});
