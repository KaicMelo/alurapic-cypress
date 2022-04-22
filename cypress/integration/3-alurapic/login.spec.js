describe('Login de usuário alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')

    });

    
    it('Fazer login de usuário valido', () => {
        cy.login(Cypress.env('userName'),Cypress.env('password'));

        cy.contains('a','(Logout)').should('be.visible');
    })
    it('Fazer login de usuário invalido', () => {
        cy.login('flavia','12397');

        cy.on('window:alert',(str) => {
            expect(str).to.equals('Invalid user name or password')
        });
    })
})