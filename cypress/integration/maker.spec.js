describe('Maker', () => {
  beforeEach(async() => {
    await cy.visit('https://epic-curie-8e15c5.netlify.app/maker')
  })

  it("Form display", () => {
    cy.get('.card_edit_form_form__heWt-')
  })
})

