Feature: Forget password feature test cases for hi-cloud app

@forgot1
Scenario: 1. Verify that Forget password works with the valid email
    Given Open the hi-cloud application
    When User navigates to the forgot password page
    And Set the email
    And Tap on the submit button
    Then Validate the success message

@forgot2
Scenario: 2. Verify that Forget password with the wrong email
    Given Open the hi-cloud application
    When User navigates to the forgot password page
    And Set the wrong email
    And Tap on the submit button
    Then Validate the error message

@forgot3
Scenario: 3. Verify that error should be displayed when email field is empty
    Given Open the hi-cloud application
    When User navigates to the forgot password page
    And Tap on the submit button
    Then Validate the error of email
