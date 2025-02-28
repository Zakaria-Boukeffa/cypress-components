describe('Todolist Component', () => {
    beforeEach(() => {
        cy.visit('/index.html')
    })

    it('should add four todos and then delete the second one, leaving 3 todos', () => {
        // Add four todos
        cy.get('[data-cy="new-todo-input"]').type('Todo 1{enter}')
        cy.get('[data-cy="new-todo-input"]').type('Todo 2{enter}')
        cy.get('[data-cy="new-todo-input"]').type('Todo 3{enter}')
        cy.get('[data-cy="new-todo-input"]').type('Todo 4{enter}')

        // Verify that there are four todos
        cy.get('[data-cy="todo-item"]').should('have.length', 4)

        // Delete the second todo (index 1)
        cy.get('[data-cy="todo-item"]').eq(1).find('[data-cy="delete-todo-button"]').click()

        // Verify that there are now three todos
        cy.get('[data-cy="todo-item"]').should('have.length', 3)
    })
})
