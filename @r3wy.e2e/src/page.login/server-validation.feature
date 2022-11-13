Feature: Login Page - Server-side form validation

  Background:
    Given I open page with URL "/login"
    Then I see a heading containing "Log in"

  Scenario: Submit with valid credentials
    Given I type "rnd+rider@vnmoof.com" into field with label "Email"
    And I type "Password1!" into field with label "Password"
    And I click button with label "Log in"
    Then I see one "My Profile | R3wy" heading

  Scenario: Submit with invalid credentials
    Given I type "whoami@r3wy.com" into field with label "Email"
    And I type "Massword1!" into field with label "Password"
    Then I see one alert with "Your credentials do not much our records" text
