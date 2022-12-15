
Cypress.Commands.add('loginUI', (user) => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[name=username]').type(user.username)
    cy.get('input[name=password]').type(user.password)
    cy.get('[data-cy="loginFormButton"]').click()
  }
)

// describe('Logs in', () => {
//   it('signs in', () => {
//     cy.loginUI({ username: 'csmitty', password: 'beasty4life'}).should(() => {
//       expect(localStorage.getItem('token')).to.exist
//     })
//   })
// })

Cypress.Commands.add('logOutUI', () => {
  cy.get('[data-cy="Nav"]')
  .contains("Logout")
  .click()
})

// describe('Logs out', () => {
//   it('clicks logout button', () => {
//     cy.loginUI({ username: 'csmitty', password: 'beasty4life'})
//     cy.logOutUI().should(() => {
//       expect(localStorage.getItem('token')).to.not.exist
//     })
//   })
// })
