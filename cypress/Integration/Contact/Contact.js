/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach( function(){
cy.fixture('example').then(function(data)
{
this.data = data
})
})

Given ('I navigate to demoblaze website', function() {
cy.visit(Cypress.env("baseURL"));
cy.viewport(1800,1000)
})
When ('I click the contact button', function() {
cy.get('[data-target="#exampleModal"]').click()
cy.wait(2000)
})

Then ('I should see a New Message tag', function() {
cy.get('h5').contains('New message').should('exist')
})

When ('I click the login button', function(){
cy.get('#login2').click()
cy.wait(2000)
})

When ('I enter valid login details', function(){
cy.get('#loginusername').type(this.data.Username)
//cy.get('#loginusername').clear()
cy.get('#loginpassword').type(this.data.Password)
cy.get("button[onclick='logIn()']").click()
})

When ('I enter the contact email', function(){
    cy.get('#recipient-email').type('jayade92@yahoo.com')
    //cy.get('#loginusername').clear()
})

When ('I enter the contact name', function(){
    cy.get('#recipient-name').type('jumoke')
    //cy.get('#loginusername').clear()
})

When ('I enter the Message', function(){
    cy.get('#message-text').type('hi')
    //cy.get('#loginusername').clear()
})

When("I click on Send Message", function () {
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
    });

    Then("The Message is successful", function () {
        return "Thanks for the message!!";
        
        });