describe('Sign up test', () => {
  it('Sign up for a new account', () => {
    cy.visit('http://localhost:8080')

    cy.get('[data-test=login-button]').click();
    cy.url().should('include', '/login');

    cy.get('[data-test=sign-up-button]').click();
    cy.get('[data-test=email-input]').type("zhenhern1234@gmail.com");
    cy.get('[data-test=password-input]').type("Weimin123!");
    cy.get('[data-test=confirm-input]').type("Weimin123!");
    cy.get('[data-test=signup-button]').click();

    cy.get('[data-test=first-name-input]').type("Zhen Hern");
    cy.get('[data-test=last-name-input]').type("Chua");
    cy.get('[data-test=birthday-input]').type("2001-09-17");
    cy.get('[data-test=confirm-button]').click();
    cy.get('[data-test=clicked-button]').click();
    cy.get('[data-test=login-header]').should("contain", "Log in");
  })
})