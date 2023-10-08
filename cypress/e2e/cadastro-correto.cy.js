import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Página de cadastro', () => {

  beforeEach(()=> {
    cy.visit('http://localhost:4200/');    
  })

  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    // cy.get('[data-test="register"]').click();
    // cy.get('input[data-test="email"]').type('usuarioJorge123@gmail.com');
    // cy.get('input[data-test="fullName"]').type('usuariojorge');
    // cy.get('input[data-test="registerUserName"]').type('jorgedopneu');
    // cy.get('input[data-test="registerPassword"]').type('jorgedopneu123');
    // cy.get('[data-test="btnRegister"]').click();

    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submeterCadastro();
  })
})