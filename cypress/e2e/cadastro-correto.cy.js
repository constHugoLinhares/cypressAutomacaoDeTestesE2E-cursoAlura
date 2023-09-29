describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click()
    cy.get('[data-test="email"]').type('hugo@email.com.br')
    cy.get('[data-test="fullName"]').type('Hugo Pessoa')
    cy.get('[data-test="registerUserName"]').type('hugop')
    cy.get('[data-test="registerPassword"]').type('Hugo1234')
    cy.contains('button', 'Register').click()
  })
})