describe('Profile test', () => {
    beforeEach(() => {
        cy.loginCustomer();
    })
    it('Edit profile details', () => {
  
      cy.get('[data-test=my-profile]').click({ force: true });
      cy.get('[data-test=first-name-input]').type("Jisoo");
      cy.get('[data-test=last-name-input]').type("Kim");
      cy.get('[data-test=birthday-input]').type("1995-01-03");
      cy.get('[data-test=save-button]').click();
    
      cy.get('[data-test=overlay-message]').should("contain", "Profile saved");
    }),
    it('Change password', () => {
  
        cy.get('[data-test=my-profile]').click({ force: true });
        cy.get('[data-test=change-password]').click();
        cy.get('[data-test=current-password]').type("Password123!");
        cy.get('[data-test=new-password]').type("Weimin123!");
        cy.get('[data-test=confirm-password]').type("Weimin123!");
        cy.get('[data-test=confirm-button]').click();
      
        cy.get('[data-test=overlay-message]').should("contain", "Incorrect password");
        cy.get('[data-test=overlay-message]').click();

        cy.get('[data-test=current-password]').type("Weimin123!");
        cy.get('[data-test=new-password]').type("Weimin123!");
        cy.get('[data-test=confirm-password]').type("Weimin123!");
        cy.get('[data-test=confirm-button]').click();
        cy.get('[data-test=overlay-message]').should("contain", "Incorrect password");
      })
  })