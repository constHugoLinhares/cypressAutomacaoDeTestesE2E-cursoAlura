describe('Página de cadastro', () => {
    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.get('[data-test="loginUserName"]').type('hugop')
      cy.get('[data-test="loginPassword"]').type('Hugo1234')
      cy.contains('button', 'login').click()
    })
})