class LoginPage {
  selectorsList() {
      return {
          usernameField: '#username',
          passwordField: '[name="password"]',
          loginButton: 'button',
          nextPage: '.MuiButton-colorPrimary'
      };
  }

  visit() {
      cy.visit('http://localhost:3000/login');
  }

  fillLoginForm(username, password) {
      cy.get(this.selectorsList().usernameField).type(username);
      cy.get(this.selectorsList().passwordField).type(password);
  }

  submitLogin() {
      cy.get(this.selectorsList().loginButton).click();
  }

  nextPage() {
    cy.get('.css-gmuwbf').should('be.visible');
    cy.get(this.selectorsList().nextPage).click();
  }
}

export default LoginPage;
