describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    //step 1 - visit a page
    cy.visit('https://example.cypress.io')

    //step 2 - query an element
    //step 3 - click the element
    cy.contains('type').click()

    //step 4 - the url should now change to include the following path
    cy.url().should('include', '/commands/actions')

    //step 5 - validate correct behavior of element
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})