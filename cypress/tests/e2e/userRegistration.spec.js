import UserRegistrationPage from '../pages/userRegistrationPage';
import LoginPage from '../pages/loginPage'; // Supondo que você tenha uma página de login

describe('User Registration and Login', () => {
    const registrationPage = new UserRegistrationPage();
    const loginPage = new LoginPage(); // Criando uma instância para a página de login

    it('should fill out the registration form, submit, and login with the registered user', () => {
        // Passos de registro
        registrationPage.visit();
        registrationPage.clickRegisterButton();
        cy.wait(1000); // Pequena espera para garantir que a página carregou

        registrationPage.fillRegistrationForm(); // Chama a função para preencher o formulário
        cy.get(registrationPage.selectorsList().signupButton).click(); // Clica no botão de envio
        cy.wait(2000);

        // Redireciona para a página de login
        cy.visit('http://localhost:3000/login');

        // Passos de login
        const username = Cypress.env('username');
        const password = Cypress.env('password');

        // Preencher os campos de login com o usuário registrado
        loginPage.visit();
        loginPage.fillLoginForm(username, password);
        loginPage.submitLogin();

        // Validação do login
        // cy.url().should('include', '/dashboard'); // Exemplo de validação, dependendo da sua aplicação
    });
});
