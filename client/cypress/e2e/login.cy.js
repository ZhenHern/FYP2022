describe('Login test', () => {
    it('Login as customer', () => {
      cy.visit('http://localhost:8080')
  
      cy.get('[data-test=login-button]').click();
      cy.url().should('include', '/login');

      cy.get('[data-test=email-input]').type("zhenhern123@gmail.com");
      cy.get('[data-test=password-input]').type("Weimin123!");
      cy.get('[data-test=login-button]').click();
      cy.url().should('include', '/index');
    }),
    it('Login as owner', () => {
        cy.visit('http://localhost:8080')
    
        cy.get('[data-test=login-button]').click();
        cy.url().should('include', '/login');
  
        cy.get('[data-test=email-input]').type("efyzc4@nottingham.edu.my");
        cy.get('[data-test=password-input]').type("Weimin123!");
        cy.get('[data-test=login-button]').click();
        cy.url().should('include', '/dashboard');
    }),
    it('Return to landing page', () => {
        cy.visit('http://localhost:8080')
        cy.get('[data-test=login-button]').click();
        cy.url().should('include', '/login');

        cy.get('[data-test=return-icon]').click();
        cy.url().should('include', '/index');
    }),
    it('Logout', () => {
        cy.loginCustomer()
        cy.get('[data-test=logout-button]').click({force: true});
        cy.url().should('include', '/index');
    })
  })