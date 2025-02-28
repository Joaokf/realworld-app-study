import LoginPage from "./pages/loginPage";
import DashboardPage from "./pages/dashboardPage";

describe('Login RealWorld APP', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  it('Login - Fail', () => {
    cy.fixture('user-data').then((users) => {
      loginPage.acessLoginPage();
      loginPage.performLogin(users.userFail.username, users.userFail.password);
      loginPage.verifyErrorMenssage(); // Verifica a mensagem de erro
    });
  });

  it('Login - Success', () => {
    cy.fixture('user-data').then((users) => {
      loginPage.acessLoginPage();
      loginPage.performLogin(users.userSucess.username, users.userSucess.password);
      
      // Aguardar um tempo para garantir que o redirecionamento tenha ocorrido
      cy.wait(2000); // Pode ajustar esse tempo conforme necessário
  
      // Verifica se o dashboard foi carregado corretamente
      dashboardPage.checkDashboardPage();
    });
  });
});
