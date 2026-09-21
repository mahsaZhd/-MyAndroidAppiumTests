  Feature: Bottom navigation buttons

    Scenario: Verify that tapping the Profile button redirects the user to the Profile page
      Given the user is on the library page
      When the user taps the Profile button
      Then the user should be redirected to the Profile page
