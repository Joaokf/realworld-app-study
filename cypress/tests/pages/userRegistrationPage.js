import Chance from 'chance';

const chance = new Chance();

class UserRegistrationPage {
    selectorsList() {
        return {
            registerButton: '[data-test="signup"]',
            genericField: '.MuiOutlinedInput-input',
            signupButton: '.MuiButton-contained',
        };
    }

    visit() {
        cy.visit('http://localhost:3000');
    }

    clickRegisterButton() {
        cy.get(this.selectorsList().registerButton).should('be.visible').click();
    }

    fillRegistrationForm() {
        const firstname = chance.first();
        const lastname = chance.last();
        const username = chance.word({ length: 8 });
        const password = chance.string({
            length: 10,
            pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%'
        });

        Cypress.env('username', username);
        Cypress.env('password', password);

        cy.log(`Gerando usuário: ${firstname} ${lastname} - ${username} / ${password}`);

        cy.get(this.selectorsList().genericField).eq(0).type(firstname);
        cy.get(this.selectorsList().genericField).eq(1).type(lastname);
        cy.get(this.selectorsList().genericField).eq(2).type(username);
        cy.get(this.selectorsList().genericField).eq(3).type(password);
        cy.get(this.selectorsList().genericField).eq(4).type(password);
    }
}

export default UserRegistrationPage;
