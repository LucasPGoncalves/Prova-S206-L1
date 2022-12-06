// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('createCliente', (list) => {
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(1) > .form-control').type(list[0])
    cy.get(':nth-child(2) > .form-control').type(list[1])
    cy.get(':nth-child(3) > .form-control').type(list[2])
    cy.get('form.ng-dirty > .btn').click()
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('#userSelect').select(list[0] + ' ' + list[1])
    cy.get('#currency').select(list[3])
    cy.get('form.ng-dirty > button').click()
})

Cypress.Commands.add('createClientePlus', (list) => {
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(1) > .form-control').type(list[0])
    cy.get(':nth-child(2) > .form-control').type(list[1])
    cy.get(':nth-child(3) > .form-control').type(list[2])
    cy.get('form.ng-dirty > .btn').click()
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('#userSelect').select(list[0] + ' ' + list[1])
    cy.get('#currency').select(list[3])
    cy.get('form.ng-dirty > button').click()
    cy.get('.home').click()
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select(list[0] + ' ' + list[1])
    cy.get('form.ng-valid > .btn').click()
})