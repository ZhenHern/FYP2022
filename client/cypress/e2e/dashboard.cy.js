describe('Owner test', () => {
    it('Go to create product', () => {
      cy.loginOwner()
  
      cy.get('[data-test=create-product-button]').click();
      cy.url().should('include', '/editProducts');
      cy.get('[data-test=product-action]').should("contain", "Create Product");
    }),
    it('Go to delete product', () => {
        cy.loginOwner()
    
        cy.get('[data-test=delete-product-button]').click();
        cy.url().should('include', '/editProducts');
        cy.get('[data-test=product-action]').should("contain", "Delete Product");
    }),
    it('Go to order page', () => {
        cy.loginOwner()
    
        cy.get('[data-test=order-button]').click({force: true});
        cy.url().should('include', '/orders');
    })
  })