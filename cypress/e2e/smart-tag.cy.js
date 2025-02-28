describe('Smart Tag Component', () => {
    beforeEach(() => {
      cy.visit('/smart-tag.html');
    });
  
    it('should display the tag on "See more" button hover', () => {
      cy.get('[data-cy="smart-tag"]').should('not.be.visible');
      cy.get('[data-cy="see-more-button"]').realHover();
      cy.get('[data-cy="smart-tag"]').should('be.visible');
    });
  
    it('should hide the tag when the mouse leaves the "See more" button', () => {
        cy.get('[data-cy="see-more-button"]').realHover();
        cy.get('[data-cy="smart-tag"]').should('be.visible');
    
        cy.get('body').realHover();
    
        cy.get('[data-cy="smart-tag"]').should('not.be.visible');
    });
  });
  