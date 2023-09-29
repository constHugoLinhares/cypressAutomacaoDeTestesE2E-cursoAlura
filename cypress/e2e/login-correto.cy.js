describe('Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home');    
  })

  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.login('Hugo Linhares', 'Hugo1234');
  })
})
