import HomePage from "./HomePage";

class LoginPage {
  usernameField = '#edit-name';
  passwordField = '#edit-pass';
  loginButton = '#edit-submit'

  inputUsername(username) {
    
    cy.get(this.usernameField).should('be.visible').focus().should('be.focused').clear().type(username);
    return this;
  }

  inputPassword(password) {
    
    cy.get(this.passwordField).should('be.visible').focus().should('be.focused').clear().type(password);
    return this;
  }

  clickLoginButton() {
    cy.get(this.loginButton).should('be.enabled').click();
    return new HomePage;
  }
}

export default LoginPage;
