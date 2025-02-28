import LoginPage from '../pages/loginPage';

describe('Login Tests', () => {
    const loginPage = new LoginPage();

    it('Login - Fail', () => {
        loginPage.visit();

        // Preenchendo o login com credenciais inválidas
        loginPage.fillLoginForm('usuario_invalido', 'senha_errada');
        loginPage.submitLogin();

        // Verifica se a URL ainda é a de login (não autenticou)
        cy.url().should('include', '/signin');

        // Verifica se a mensagem de erro "Username or password is invalid" aparece
        cy.contains('Username or password is invalid').should('be.visible');
    });
});
