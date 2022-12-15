


describe('Test walks through pages to reach a user profile', () => {
  it("Goes to csmitty's page", () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="Nav"]')
    .contains("Events")
    .click()
    cy.get('[data-cy="event-mid"]').contains('UFC 281').click()
    cy.get('[data-cy="cardPage-mid"]').contains('HOOKER VS. PEULLES').click()
    cy.get('[data-cy="match-mid"]').contains('HOOKER VS. PEULLES').click()
    cy.get('[data-cy="username"]').contains('csmitty')
  })

  it("Goes to root's page", () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="Nav"]')
    .contains("Events")
    .click()
    cy.get('[data-cy="event-mid"]').contains('UFC 281').click()
    cy.get('[data-cy="cardPage-mid"]').contains('ARCE VS. JACKSON').click()
    cy.get('[data-cy="match-mid"]').contains("root's Score Card").click()
    cy.get('[data-cy="username"]').contains('root')
  })

  it.only("Simulates a natural log in/register", () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="Nav"]')
    .contains("Matches")
    .click()
    cy.get('[data-cy="matches-mid"]').contains('PETROSKI VS. TURMAN').click()
    cy.contains("Log in to score bouts!").click()
    cy.contains("Click to register!").click()
  })

})