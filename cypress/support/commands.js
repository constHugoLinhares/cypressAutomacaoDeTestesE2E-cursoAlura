Cypress.Commands.add('login', (user, password) => { 
    cy.get('[data-test="loginUserName"]').type(user)
    cy.get('[data-test="loginPassword"]').type(password)
    cy.contains('button', 'login').click()
 })



// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })