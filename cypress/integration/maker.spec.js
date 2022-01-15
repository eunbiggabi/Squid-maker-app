describe('Maker', () => {
  beforeEach(async() => {
    await cy.visit('https://epic-curie-8e15c5.netlify.app/maker')
  })

  it("Form display", () => {
    cy.get('.card_edit_form_form__heWt-')
  })

  // it("Form input"), () => {
  //   cy.get('.card_edit_form_input__dEfDQ')
  // }

  it("Card display"), () => {
    cy.get('.card_card__32Val card_colorful__1qvMg')
  }


})

