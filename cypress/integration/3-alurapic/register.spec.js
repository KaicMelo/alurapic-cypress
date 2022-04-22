describe('Cadastro de usuário alura pic', () => {

    beforeEach(() => {
        cy.visit('/')

    });
    it('verifica mensagens validacao', () => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','Full name is required!').should('be.visible');
        cy.contains('ap-vmessage','User name is required!').should('be.visible');
        cy.contains('ap-vmessage','Password is required!').should('be.visible');
    })
    it('verifica mensagens de email invalido', () => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible');

        cy.get('input[formcontrolname="email"]').type('Kaic');
        cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');
    })
    it('verifica mensagens de quantidade minima de caracteres no user name', () => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible');

        cy.get('input[formcontrolname="userName"]').type('k');
        cy.contains('button','Register').click();
        
        cy.contains('ap-vmessage','Mininum length is 2').should('be.visible');
    })
    it('verifica senha com menos de 8 caracteres', () => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible');

        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button','Register').click();

        cy.contains('ap-vmessage','Mininum length is 8').should('be.visible');
    });
    const users = require('../../fixtures/users.json');

    users.map(user => {
        it.only(`Registra novo usuário ${user.fullName}`, () => {
            cy.contains('a','Register now').click();
            cy.get('input[formcontrolname="email"]').type(user.email);
            cy.get('input[formcontrolname="fullName"]').type(user.fullName);
            cy.get('input[formcontrolname="userName"]').type(user.userName);
            cy.get('input[formcontrolname="password"]').type(user.password);
            cy.contains('button','Register').click();
        })
    })
})