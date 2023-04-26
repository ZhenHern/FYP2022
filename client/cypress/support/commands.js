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

Cypress.Commands.add('loginCustomer', () => {
  cy.visit('/login');
  cy.get('[data-test=email-input]').type("zhenhern123@gmail.com");
  cy.get('[data-test=password-input]').type("Weimin123!");
  cy.get('[data-test=login-button]').click();
}),
Cypress.Commands.add('loginOwner', () => {
  cy.visit('/login');
  cy.get('[data-test=email-input]').type("efyzc4@nottingham.edu.my");
  cy.get('[data-test=password-input]').type("Weimin123!");
  cy.get('[data-test=login-button]').click();
})