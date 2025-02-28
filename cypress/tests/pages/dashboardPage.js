// class DashboardPage {
//     selectorList() {
//         const selectors = {
//             dashboardHeader: '.MuiAppBar-positionAbsolute', // Cabeçalho do dashboard
//             dashboardGrid: '.MuiGrid-grid-xs-12'   // Grid do dashboard (ou qualquer outro elemento importante)
//         };

//         return selectors;
//     }

//     // Verificar se o Dashboard foi carregado corretamente
//     checkDashboardPage() {
//         // Verifica se o cabeçalho do dashboard está visível
//         cy.get(this.selectorList().dashboardHeader).should('be.visible');
        
//         // Verifica se o grid do dashboard está visível
//         cy.get(this.selectorList().dashboardGrid).eq(0).should('be.visible');
//     }
// }

// export default DashboardPage;
