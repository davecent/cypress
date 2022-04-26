/// <reference types="cypress" />

it('should be able to add a new todo to the list', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo', {timeout: 5000}).type("Take out the garbage.{enter}")
    cy.get('label').should('have.text', 'Take out the garbage.')
    cy.get('.toggle').should('not.be.not.be.checked')
    //cy.contains('Clear completed').click()
})