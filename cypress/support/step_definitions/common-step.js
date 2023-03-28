import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import { DashboardPage } from "../../pageObjects/dashboard-page";

const dashboardPage = new DashboardPage();


Given('Open the hi-cloud application', () => {
    cy.visit('/');
    cy.ValidateLoginPage();
})


And('User navigates to the {string} page', (page) => {
    dashboardPage.navigateTo(page);
})

And('User navigates to the dashboard by URL', () => {
    cy.visit('/admin/dashboard')
})

Then('Validate the success message', () => {
    cy.validateSuccessMessage();
})

Then('Validate the error message', () => {
    cy.validateErrorMessage();
})

Then('Validate the organization page', () => {
    cy.ValidateOrganizationPage();
})

Then('Validate the region page', () => {
    cy.ValidateRegionPage();
})

Then('Validate the user page', () => {
    cy.ValidateUserPage();
})

Then('Validate the CE device page', () => {
    cy.ValidateCEDevicePage();
})

Then('Validate the device configuration page', () => {
    cy.ValidateDeviceConfigPage();
})

Then('Validate the hub and spoke section', () => {
    cy.ValidateHubAndSpokeSection();
})

And('Validate the search result row should be exact 1', () => {
    cy
        .get('#tbl_admin_devices tbody tr')
        .should('have.length',1);
})