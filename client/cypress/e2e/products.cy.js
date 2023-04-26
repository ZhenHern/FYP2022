describe('Purchase products test', () => {
    it('Attempt to add products before login', () => {
      cy.visit('http://localhost:8080')
  
      cy.get('[data-test=product-title]').click();
      cy.get('[data-test=product-title]').should("be.visible");
      cy.get('[data-test=product-dropdown]').first().invoke('show')
      cy.get('[data-test=product-category]').first().click();
      cy.url().should('include', '/products');
      cy.get('[data-test=product-category]').should("contain", "Cake");
      cy.get('[data-test=add-quantity]').first().click({ force: true });
      cy.get('[data-test=add-product]').first().click({ force: true });
      cy.get('[data-test=overlay-message]').should("contain", "Please login first");
    }),
    it('Add products after login', () => {
        cy.loginCustomer();

        cy.get('[data-test=product-title]').click();
        cy.get('[data-test=product-title]').should("be.visible");
        cy.get('[data-test=product-dropdown]').first().invoke('show')
        cy.get('[data-test=product-category]').first().click();
        cy.url().should('include', '/products');
        cy.get('[data-test=product-category]').should("contain", "Cake");
        cy.get('[data-test=add-quantity]').first().click({ force: true });
        cy.get('[data-test=add-product]').first().click({ force: true });
        cy.get('[data-test=overlay-message]').should("contain", "Added into cart");

        cy.get('[data-test=item-cart-button]').click();
        cy.get('[data-test=checkout-button]').click();
        cy.get('[data-test=paypal-container]').should('exist');
    })
  })