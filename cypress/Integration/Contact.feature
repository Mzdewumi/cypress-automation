Feature: Demoblaze ecommerce website contact modal validation

Application regression​

@login
    Scenario: Verify that the cantact page is accessible when not logged in 
    Given I navigate to demoblaze website
    When I click the contact button
    Then I should see a New Message tag

    Scenario: Verify that the cantact page is accessible when logged in 
    Given I navigate to demoblaze website
    When I click the login button
    When I enter valid login details
    When I click the contact button
    Then I should see a New Message tag

Scenario: Verify that Message can be sent when logged in 
    Given I navigate to demoblaze website
    When I click the login button
    When I enter valid login details
    When I click the contact button
    When I should see a New Message tag
    When I enter the contact email
    When I enter the contact name
    When I enter the Message
    When I click on Send Message
    Then The Message is successful

