import loginUI from "./Login.cy.js"

// describe('Checks for the post form instances', () => {
//   it('views non user instance', () => {
//     cy.visit('http://localhost:3000/match/1/').wait(500)
//     cy.contains('Log in to score bouts!').should('exist')
//   })

//   it('views user instance in which the user has not posted', () => {
//     cy.loginUI({ username: 'csmitty', password: 'beasty4life'}).should(() => {
//       expect(localStorage.getItem('token')).to.exist
//     })
//     cy.visit('http://localhost:3000/match/1/').wait(500)
//     cy.contains('Post your Score!').should('exist')
//   })

//   //NOTE: The following test will not pass after the user account made a scorecard for the bout,
//   // a different user or deleting the scorecard may be required
//   it('posts a scorecard as the user', () => {
//     cy.loginUI({ username: 'csmitty', password: 'beasty4life'}).should(() => {
//       expect(localStorage.getItem('token')).to.exist
//     })
//     cy.visit('http://localhost:3000/match/1/').wait(500)
//     cy.get('[data-cy="RDrop1"]')
//     .select('10').should('have.value', '10')
//     cy.get('[data-cy="BDrop1"]')
//     .select('9').should('have.value', '9')

//     cy.get('[data-cy="RDrop2"]')
//     .select('10').should('have.value', '10')
//     cy.get('[data-cy="BDrop2"]')
//     .select('9').should('have.value', '9')

//     cy.get('[data-cy="RDrop3"]')
//     .select('9').should('have.value', '9')
//     cy.get('[data-cy="BDrop3"]')
//     .select('10').should('have.value', '10')
    
//     cy.intercept('http://127.0.0.1:8000/user/post/').as('checkPost')
//     cy.get('[data-cy="subbtn"]').click()
//     cy.wait('@checkPost').its('response.statusCode').should('eq', 201)
//   })

//   it.only('views a user already posted instance', () => {
//     cy.loginUI({ username: 'csmitty', password: 'beasty4life'}).should(() => {
//       expect(localStorage.getItem('token')).to.exist
//     })
//     cy.visit('http://localhost:3000/match/1/').wait(500)
//     cy.contains('Thank you for your score').should('exist')
//   })
// })

