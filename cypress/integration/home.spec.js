// sample.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Home', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://epic-curie-8e15c5.netlify.app')
  })

  it("Title", () => {
    cy.title().should('include', 'Squid Maker')
  })

  it("Link Test", () => {
    cy.get('.home_home_maker__WpMCR').click()
  })
})

