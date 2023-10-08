const elements = require('./elements').elements;

class Cadastro {
    acessarPaginaDeCadastro() {
        cy.visit('http://localhost:4200/');
        cy.get(`${elements.register}`).click();
    }

    preencherFormulario(){
        cy.get(`${elements.email}`).type('usuarioJorge123@gmail.com');
        cy.get(`${elements.fullName}`).type('usuariojorge');
        cy.get(`${elements.registerUserName}`).type('jorgedopneu');
        cy.get(`${elements.registerUserPass}`).type('jorgedopneu123');
    }

    submeterCadastro(){
        cy.get(`${elements.btnRegister}`).click();
    }
}

export default new Cadastro();