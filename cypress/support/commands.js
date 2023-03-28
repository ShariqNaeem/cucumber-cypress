import 'cypress-wait-until';
Cypress.Commands.add("ValidateForgotPasswordPage", () => {
    cy
    .url()
    .should('include', 'forgotpassword');
  });

  Cypress.Commands.add("validateSuccessMessage", () => {
    cy
      .get('div[class="toast-section Success"]')
      .should('be.visible')
  });

  Cypress.Commands.add("validateErrorMessage", () => {
    cy
      .get('div[class="toast-section Error"]')
      .should('be.visible')
  });

  Cypress.Commands.add("ValidateLoginPage", () => {
    cy
    .url()
    .should('include', 'login');
  });

  Cypress.Commands.add("ValidateDashboardPage", ()=>{
      cy
      .url()
      .should('include', 'admin/dashboard')
  });

  Cypress.Commands.add("ValidateOrganizationPage", ()=>{
    cy
    .url()
    .should('include', 'admin/organizations')
  });

  Cypress.Commands.add("ValidateUserPage", ()=>{
    cy
    .url()
    .should('include', 'admin/users')
  });

  Cypress.Commands.add("ValidateRegionPage", ()=>{
    cy
    .url()
    .should('include', 'admin/regions')
  });

  Cypress.Commands.add("ValidateCEDevicePage", ()=>{
    cy
    .url()
    .should('include', 'admin/devices')
  });

  Cypress.Commands.add("ValidateDeviceConfigPage", ()=>{
    cy
    .get('#Interfaces')
    .should('be.visible')
  });

  Cypress.Commands.add("ValidateHubAndSpokeSection", ()=>{
    cy
    .url()
    .should('include', 'hub-spoke')
  });
