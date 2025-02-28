describe('Scroll to Top Component', () => {
    beforeEach(() => {
      cy.visit('/scroll-to-top.html')
    })
  
    it('should display the "scroll-to-top" button when scrolling down', () => {
      // Scroll down by clicking the scroll button
      cy.get('[data-cy="scroll-button"]').click()
  
      // Wait for the scroll-to-top button to appear
      cy.get('[data-cy="scroll-to-top-button"]').should('be.visible')
    })
  
    it('should scroll to the top and hide the button when clicked', () => {
      // Scroll down first
      cy.get('[data-cy="scroll-button"]').click()
  
      // Click the scroll-to-top button
      cy.get('[data-cy="scroll-to-top-button"]').click()
  
      // Verify that it scrolls to the top
      cy.window().its('scrollY').should('eq', 0)
  
      // Verify that the button is no longer visible
      cy.get('[data-cy="scroll-to-top-button"]').should('not.be.visible')
    })
  })
  