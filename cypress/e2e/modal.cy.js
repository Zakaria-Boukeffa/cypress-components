describe('Modal Component', () => {
    beforeEach(() => {
      cy.visit('/modal.html')
    })
  
    it('should open the modal when the display button is clicked', () => {
      cy.get('[data-cy=display-button]').click()
      cy.get('[data-cy=modal]').should('be.visible')
    })
  
    it('should close the modal when clicking outside', () => {
      cy.get('[data-cy=display-button]').click()
      cy.get('[data-cy=modal]').should('be.visible')
      cy.get('body').click(0, 0)
      cy.get('[data-cy=modal]').should('not.be.visible')
    })
  
    it('should contain the correct title in the modal', () => {
      cy.get('[data-cy=display-button]').click()
      cy.get('[data-cy=modal-title]').should('have.text', 'Lorem Ipsum')
    })
  })
  